<script setup lang="ts">
document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.ondragstart = () => false;

useTheme();
</script>

<template>
  <transition name="route" mode="out-in">
    <router-view />
  </transition>
</template>

<style scoped>
.route-enter-active,
.route-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.route-enter-from {
  opacity: 0;
  transform: translate3d(100%, 0, 0) rotate3d(0, 1, 0, 35deg);
  transform-origin: left center;
  filter: brightness(1.2) saturate(1.2);
}

.route-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0) rotate3d(0, 1, 0, -35deg);
  transform-origin: right center;
  filter: brightness(0.8) saturate(0.8);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translate3d(0, 0, 0) rotate3d(0, 1, 0, 0);
  filter: brightness(1) saturate(1);
}
</style>
