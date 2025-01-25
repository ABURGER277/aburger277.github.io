<script setup lang="ts">
import { ref } from 'vue';
import Divider from '../Common/Divider.vue';

const mobileMenuFlag = ref(false);
const themeListFlag = ref(false);
function showThemeList() { themeListFlag.value = true; }
function moveToCareer() { mobileMenuFlag.value = false; }
function moveToProfile() { mobileMenuFlag.value = false; }
function moveToProject() { mobileMenuFlag.value = false; }
</script>
<template>
  <nav class="desktop-menu">
    <ul>
      <li class="desktop-menu-list" @click="moveToProfile">Profile</li>
      <divider color="var(--color-text)" direction="vertical"/>
      <li class="desktop-menu-list" @click="moveToCareer">Career</li>
      <divider color="var(--color-text)" direction="vertical"/>
      <li class="desktop-menu-list" @click="moveToProject">Project</li>
      <divider color="var(--color-text)" direction="vertical"/>
      <li class="desktop-menu-list" @click="showThemeList">Theme</li>
    </ul>
  </nav>
</template>
<style scoped>
.desktop-menu {
  display: none;
  background-color: var(--color-primary);
  width: 100%;
  height: 60px;
}
ul {
  display: flex;
  height: 100%;
}
.desktop-menu-list {
  font-size: large;
  flex-grow: 1;
}
.desktop-menu-list:hover {
  font-weight: 900;

  cursor: pointer;
}
</style>