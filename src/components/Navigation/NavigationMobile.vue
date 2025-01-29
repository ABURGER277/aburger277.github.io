<script setup lang="ts">
import { XMarkIcon, Bars3Icon } from '@heroicons/vue/16/solid';
import { storeToRefs } from 'pinia';
import { UserCircleIcon, BriefcaseIcon, PuzzlePieceIcon, BookOpenIcon, SparklesIcon } from '@heroicons/vue/24/outline'
const { setTheme, themes } = useTheme();
const { profile, career, project, experiment } = storeToRefs(useCardStore());

const mobileMenuFlag = ref(false);
const themeListFlag = ref(false);

watch(mobileMenuFlag, () => {
  mobileMenuFlag.value
  ? document.body.style.overflow = 'hidden'
  : document.body.style.overflow = 'auto';
})

function showNav() { mobileMenuFlag.value = true; }
function closeNav() { close(); }
function showThemeList() { themeListFlag.value = true; }
function moveToProfile() {
  profile.value?.scrollIntoView({behavior: 'smooth'})
  close();
}
function moveToCareer() {
  career.value?.scrollIntoView({behavior: 'smooth'})
  close();
}
function moveToProject() {
  project.value?.scrollIntoView({behavior: 'smooth'})
  close();
}
function moveToExperiment() {
  experiment.value?.scrollIntoView({behavior: 'smooth'})
  close();
}

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
        <li class="mobile-menu-list" @click="moveToProfile">
          <UserCircleIcon class="menu-list-icon"/>
          Profile
          <divider color="var(--color-text)"/>
        </li>
        <li class="mobile-menu-list" @click="moveToCareer">
          <BriefcaseIcon class="menu-list-icon"/>
          Career
          <divider color="var(--color-text)"/>
        </li>
        <li class="mobile-menu-list" @click="moveToProject">
          <PuzzlePieceIcon class="menu-list-icon"/>
          Project
          <divider color="var(--color-text)"/>
        </li>
        <li class="mobile-menu-list" @click="moveToExperiment">
          <BookOpenIcon class="menu-list-icon"/>
          Experiments
          <divider color="var(--color-text)"/>
        </li>
        <li class="mobile-menu-list" @click="showThemeList">
          <SparklesIcon class="menu-list-icon"/>
          Theme
        </li>
      </ul>
      <transition name="fade" mode="out-in">
      <ul v-if="themeListFlag" >
        <li v-for="theme in themes"
          class="mobile-theme-list animation"
          :style = "{
            'background-color': theme.colors.background,
            color: theme.colors.text
          }"
          @click="selectTheme(theme.key)"
        >
          {{ theme.name }}
        </li>
        <!-- <divider color="var(--color-text)"/> -->
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

  z-index: 999;
}
.mobile-menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  font-size: large;
  margin-bottom: 10px;
}
.mobile-menu-list:hover {
  opacity: 0.5;
}
.menu-list-icon {
  width: 80px;
}
.mobile-theme-list {
  width: 80vw;
  height: 10vh;
  margin: 10px;
  padding: 20px;
  font-weight: 900;
  font-size: xx-large;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes typing {
from {
  width: 0;
}
}
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
.animation {
  overflow: hidden;
  -webkit-animation: typing 3s steps(13, end) infinite, blink-caret .1s step-end infinite alternate;
}
</style>