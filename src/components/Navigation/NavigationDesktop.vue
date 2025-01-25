<script setup lang="ts">
import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import Divider from '../Common/Divider.vue';
import { useTheme } from '../../composables/useTheme'
import { ChevronDownIcon } from '@heroicons/vue/16/solid';

const { setTheme, themes } = useTheme();

const themeListFlag = ref(false);
function showThemeList() { themeListFlag.value = true; }
function closeThemeList() { themeListFlag.value = false; }
function moveToCareer() { }
function moveToProfile() { }
function moveToProject() { }

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
      <div class="empty-div"></div>
      <li class="desktop-menu-theme" @click="showThemeList">
        Theme
        <ChevronDownIcon class="icon"/>
      </li>
    </ul>
    <div
      v-if="themeListFlag"
      v-on-click-outside="closeThemeList"
      class="theme-container"
    >
      <div v-for="theme in themes">
        <div class="theme-item"
          :style="{
            'background-color': theme.colors.background,
            color: theme.colors.text,
          }"
          @click="setTheme(theme.key)"
        >
          {{ theme.name }}
        </div>
      </div>
    </div>
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
  flex-grow: 0;
  letter-spacing: 1.5px;
  padding: 0 40px;
}
.desktop-menu-list:hover {
  transform: scale(1.5);
  transition: transform 1s, background-color 0.3s;
  cursor: pointer;
}
.empty-div {
  flex-grow: 1;
}
.desktop-menu-theme {
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: large;
  flex-grow: 0;
  letter-spacing: 1.5px;
}
.desktop-menu-theme:hover {
  cursor: pointer;

}
.icon {
  width: 30px;
  padding-right: 20px;
}

/* theme List */
.theme-container {
  position: relative;
  top: 30px;
  margin: 0 10px auto auto;
  width: fit-content;
  border: 2px solid var(--color-text);
  background-color: var(--color-primary);
  box-shadow: 5px var(--color-text);
}
.theme-item {
  padding: 20px;
  font-weight: 1000;
}
.theme-item:hover {
  cursor: pointer;
}
</style>