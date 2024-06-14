<template>
  <div class="threejs--container" ref="canvasDom">
        
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { useRoute } from "vitepress"

const canvasDom = ref<HTMLElement>()

let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  controls: OrbitControls,
  mixer: THREE.AnimationMixer,
  clock: THREE.Clock;

const route = useRoute()

onMounted(() => {
  nextTick(() => {
    const CW = canvasDom.value!.clientWidth, CH = canvasDom.value!.clientHeight;
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    scene.environment = new THREE.Color(0xffffff)
    camera = new THREE.PerspectiveCamera(50, CW / CH, 0.1, 1000);
    camera.position.set(0, 0, 3)
    camera.updateProjectionMatrix()
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(CW, CH)
    canvasDom.value?.appendChild(renderer.domElement)
    clock = new THREE.Clock()
    
    // loadControls()
    render()
    setLight()
    loadModel()
  })
})

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
  // controls.update()

  let mixerUpdateDelta = clock.getDelta();

  if(mixer) mixer.update(mixerUpdateDelta)
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