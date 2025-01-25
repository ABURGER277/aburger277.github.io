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
  border-bottom: 2px solid var(--color-text);
  width: 100%;
  height: 60px;
}
ul {
  display: flex;
  align-items: center;
  height: 100%;
}
.desktop-menu-list {
  font-weight: 900;
  font-size: large;
  flex-grow: 1;
  letter-spacing: 1.5px;
}
.desktop-menu-list:hover {
  transform: scale(1.5);
  transition: transform 1s, background-color 0.3s;
  cursor: pointer;
}
</style>