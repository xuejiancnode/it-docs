<template>
  <div class="threejs--container">
    <Three/>
  </div>
</template>
<script setup lang="ts">
import Three from './Three.vue';
</script>
<style scoped lang="css">
.threejs--container {
  width: 100%;
  height: 50vh;
  position: absolute;
  z-index: 10;
}
</style>