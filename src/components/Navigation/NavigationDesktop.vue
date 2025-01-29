<script setup lang="ts">
import { storeToRefs } from 'pinia';
const { setTheme, themes } = useTheme();

const { profile, career, project, experiment } = storeToRefs(useCardStore());

function moveToProfile() { profile.value?.scrollIntoView({behavior: 'smooth'})}
function moveToCareer() { career.value?.scrollIntoView({behavior: 'smooth'}) }
function moveToProject() { project.value?.scrollIntoView({behavior: 'smooth'}) }
function moveToExperiments() { experiment.value?.scrollIntoView({behavior: 'smooth'})}

</script>
<template>
<nav class="desktop-menu">
  <ul>
    <li class="desktop-menu-list" @click="moveToProfile">Profile</li>
    <li class="desktop-menu-list" @click="moveToCareer">Career</li>
    <li class="desktop-menu-list" @click="moveToProject">Project</li>
    <li class="desktop-menu-list" @click="moveToExperiments">Experiments</li>
    <div class="empty-div"></div>
  </ul>
  <div
    class="theme-container shadow"
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
  position: fixed;
  background-color: var(--color-primary);
  border-bottom: 2px solid var(--color-accent2);
  width: 100%;
  height: 60px;

  z-index: 999;
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
.disable {
  font-weight: 900;
  font-size: large;
  flex-grow: 0;
  letter-spacing: 1.5px;
  padding: 0 40px;
  opacity: 0.5;
}
.desktop-menu-list:hover {
  cursor: pointer;
}
.desktop-menu-list:after {
  content: "";
  position: absolute;
  background-color: var(--color-accent2);
  height: 3px;
  width: fit-content;
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
  position: fixed;
  top: 200px;
  right: 30px;
  width: 150px;
  background-color: var(--color-primary);
}
.theme-item {
  padding: 20px;
  text-align: center;
  font-weight: 1000;
}
.theme-item:hover {
  cursor: pointer;
}
.shadow
{
  background: linear-gradient(0deg,#000,#262626);
}
.shadow:before,
.shadow:after
{
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  background: linear-gradient(45deg,#fb0094,#0000ff,#00ff00,#ffff00,#ff0000,#fb0094,#0000ff,#00ff00,#ffff00,#ff0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: animate 20s linear infinite;
}
.shadow:after
{
  filter: blur(20px);
}
@keyframes animate
{
  0%
  {
    background-position: 0 0;
  }
  50%
  {
    background-position: 300% 0;
  }
  100%
  {
    background-position: 0 0;
  }
}
</style>