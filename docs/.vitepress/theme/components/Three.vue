<template>
  <div class="threejs--container" ref="canvasDom">
        
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from "vue"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { useData } from "vitepress"

const canvasDom = ref<HTMLElement>()

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  controls: OrbitControls,
  mixer: THREE.AnimationMixer,
  clock: THREE.Clock;

const pageData = useData()

onMounted(() => {
  const CW = canvasDom.value!.clientWidth, CH = canvasDom.value!.clientHeight;
  scene = new THREE.Scene()
  setBackage(pageData.isDark.value)
  // 添加鼠标控制器
  camera = new THREE.PerspectiveCamera(50, CW / CH, 0.1, 1000);
  camera.position.set(0, 0, 3)
  camera.updateProjectionMatrix()
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(CW, CH)
  canvasDom.value?.appendChild(renderer.domElement)
  controls = new OrbitControls(camera, renderer.domElement)
  // 限制纵向旋转
  controls.maxPolarAngle = Math.PI / 2; // 最大俯仰角
  controls.minPolarAngle = Math.PI / 2; // 最小俯仰角
  controls.update()
  clock = new THREE.Clock()
  
  // loadControls()
  render()
  setLight()
  loadModel()
})


watch(() => pageData.isDark.value, (newVal) => {
  setBackage(newVal)
}, { deep: true })



function loadModel() {
  const gltfLoader = new GLTFLoader()
  gltfLoader.load('model/BrainStem.gltf', (gltf) => {
    console.log(gltf);
    const model = gltf.scene;
    const animate = gltf.animations[0]

    mixer = new THREE.AnimationMixer(model)
    const action = mixer.clipAction(animate)
    action.loop = THREE.LoopRepeat
    action.play()

    model.translateY(-1)
    model.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true        
      }
    })

    scene.add(model)
  })
}

function setLight() {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
  directionalLight.castShadow = true
  directionalLight.position.set(0, 2, 3)

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2)
  directionalLight2.castShadow = true
  directionalLight2.position.set(0, 2, -3)
  scene.add(directionalLight, directionalLight2)
}

function loadControls() {
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.update()
}

function render() {
  requestAnimationFrame(render)

  renderer.render(scene, camera)

  let mixerUpdateDelta = clock.getDelta();

  if(mixer) mixer.update(mixerUpdateDelta)
}

function setBackage(isDark: boolean) {
  if (isDark) {
    scene.background = new THREE.Color('#1b1b1f')
    scene.environment = new THREE.Color('#1b1b1f')
  } else {
    scene.background = new THREE.Color(0xffffff)
    scene.environment = new THREE.Color(0xffffff)
  }
}
</script>
<style scoped lang="css">
.threejs--container {
  width: 100%;
  height: 50vh;
  position: absolute;
  z-index: 10;
}
</style>