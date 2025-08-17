<script setup lang="ts">
const { setTheme, themes } = useTheme();

const { profileDOM, careerDOM, projectDOM, experimentDOM } = storeToRefs(useScrollStore());

const TOP_MENU_HEIGHT = 60 + 50; // el.height + some margin

const scrollToEl = (el: HTMLElement | null) => {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - TOP_MENU_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

const moveToProfile = () =>     scrollToEl(profileDOM.value);
const moveToCareer = () =>      scrollToEl(careerDOM.value);
const moveToProject = () =>     scrollToEl(projectDOM.value);
const moveToExperiments = () => scrollToEl(experimentDOM.value);
</script>
<template>
<nav class="desktop-menu">
  <ul>
    <li class="desktop-menu-list menu-effect" @click="moveToProfile">Profile</li>
    <li class="desktop-menu-list menu-effect" @click="moveToCareer">Career</li>
    <li class="desktop-menu-list menu-effect" @click="moveToProject">Project</li>
    <li class="desktop-menu-list menu-effect" @click="moveToExperiments">Experiments</li>
    <div class="empty-div"></div>
  </ul>
  <!-- fixed theme list -->
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
  <!-- fixed theme list -->
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
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: large;
  flex-grow: 0;
  letter-spacing: 1.5px;
  padding: 0 40px;
}
.desktop-menu-list:hover {
  cursor: pointer;
  transition: all 0.5s linear;
  color: var(--color-accent1);
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
.menu-effect:before, .menu-effect:after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}

.menu-effect:before {
  margin-right: 10px;
  content: '[';
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
}

.menu-effect:after {
  margin-left: 10px;
  content: ']';
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
}

.menu-effect:hover:before, .menu-effect:hover:after, .menu-effect:focus:before, .menu-effect:focus:after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
}

/* fixed theme List */
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