<template>
  <a :href="link" target="_blank" style="display: inline-block;vertical-align: text-bottom;">
    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" class="link-icon">
      <path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z"></path>
    </svg>
  </a>
</template>
<script setup lang="ts">
const props = defineProps(['link'])
</script>
<style scoped>
  
</style>