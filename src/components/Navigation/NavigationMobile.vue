<script setup lang="ts">
import { XMarkIcon, Bars3Icon } from '@heroicons/vue/16/solid';
const { setTheme, themes } = useTheme();

const mobileMenuFlag = ref(false);
const themeListFlag = ref(false);
function showNav() { mobileMenuFlag.value = true; }
function closeNav() { close(); }
function showThemeList() { themeListFlag.value = true; }
function moveToCareer() { close(); }
function moveToProfile() { close(); }
function moveToProject() { close(); }

function close() {
  mobileMenuFlag.value = false;
  themeListFlag.value = false;
}

function selectTheme(themeKey: string) {
  setTheme(themeKey);
  mobileMenuFlag.value = false;
  themeListFlag.value = false;
}
</script>
<template>
  <div>
    <Bars3Icon v-if="!mobileMenuFlag" class="hamburger-menu" @click="showNav" key="hamburger"/>
    <transition name="fade" mode="out-in">
    <nav v-if="mobileMenuFlag" class="mobile-menu" key="menu">
      <XMarkIcon class="x-button" @click="closeNav"/>
      <ul v-if="!themeListFlag">
        <li class="mobile-menu-list" @click="moveToProfile">Profile</li>
        <divider color="var(--color-text)"/>
        <li class="mobile-menu-list" @click="moveToCareer">Career</li>
        <divider color="var(--color-text)"/>
        <li class="mobile-menu-list" @click="moveToProject">Project</li>
        <divider color="var(--color-text)"/>
        <li class="mobile-menu-list" @click="showThemeList">Theme</li>
        <divider color="var(--color-text)"/>
      </ul>
      <transition name="fade" mode="out-in">
      <ul v-if="themeListFlag">
        <li v-for="theme in themes"
          class="mobile-menu-list"
          :style = "{
            'background-color': theme.colors.background,
            color: theme.colors.text
          }"
          @click="selectTheme(theme.key)"
        >
          {{ theme.name }}
        </li>
        <divider color="var(--color-text)"/>
      </ul>
      </transition>
    </nav>
    </transition>
  </div>
</template>
<style scoped>
nav {
  position: fixed;
  display: flex;
  flex-direction: column;
}
.hamburger-menu {
  position: fixed;
  right: 0;
  width: 25px;
  padding: 10px;
}
.x-button {
  align-self: end;
  width: 25px;
  padding: 10px;
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
  cursor: pointer;
}

/* menu transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>