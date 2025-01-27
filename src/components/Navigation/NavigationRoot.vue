<script setup lang="ts">
</script>
<template>
<header>
  <NavigationMobile class="nav-mobile"/>
  <NavigationDesktop class="nav-desktop"/>
</header>
</template>
<style scoped>
.nav-mobile, .nav-desktop {
  display: none;
}
/* 모바일 화면에서 NavigationMobile 표시 */
@media (max-width: 767px) {
  .nav-mobile {
    display: block;
  }
}
/* 데스크톱 화면에서 NavigationDesktop 표시 */
@media (min-width: 768px) {
  .nav-desktop {
    display: block;
  }
}
</style>