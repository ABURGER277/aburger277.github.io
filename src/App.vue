<script setup lang="ts">
document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.ondragstart = () => false;

useTheme();
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
