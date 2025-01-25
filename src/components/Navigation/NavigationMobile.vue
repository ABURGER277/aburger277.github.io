<script setup lang="ts">
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/16/solid';
import { Bars3Icon } from '@heroicons/vue/16/solid'
import Divider from '../Common/Divider.vue';

const mobileMenuFlag = ref(false);
const themeListFlag = ref(false);
function showNav() { mobileMenuFlag.value = true; }
function closeNav() { mobileMenuFlag.value = false; }
function showThemeList() { themeListFlag.value = true; }
function moveToCareer() { mobileMenuFlag.value = false; }
function moveToProfile() { mobileMenuFlag.value = false; }
function moveToProject() { mobileMenuFlag.value = false; }
</script>
<template>
  <div>
    <Bars3Icon v-if="!mobileMenuFlag" class="hamburger-menu" @click="showNav"></Bars3Icon>
    <nav v-if="mobileMenuFlag" class="mobile-menu">
      <XMarkIcon class="x-button" @click="closeNav"/>
      <ul>
        <li class="mobile-menu-list" @click="moveToProfile">Profile</li>
        <divider color="var(--color-text)"/>
        <li class="mobile-menu-list" @click="moveToCareer">Career</li>
        <divider color="var(--color-text)"/>
        <li class="mobile-menu-list" @click="moveToProject">Project</li>
        <divider color="var(--color-text)"/>
        <li class="mobile-menu-list" @click="showThemeList">Theme</li>
        <divider color="var(--color-text)"/>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
nav {
  position: fixed;
}
.hamburger-menu {
  position: fixed;
  right: 0;
  background-color: var(--color-primary);
  width: 40px;
  padding: 5px;
}
.x-button {
  position: fixed;
  width: 40px;
  padding: 5px;
  right: 0;
}
.mobile-menu {
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.mobile-menu-list {
  font-size: xx-large;
}
</style>