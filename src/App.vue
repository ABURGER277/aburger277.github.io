<script setup lang="ts">
document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.ondragstart = () => false;

useTheme();
</script>

<template>
  <NavigationRoot/>
  <Main/>
</template>

<style scoped>
</style>
