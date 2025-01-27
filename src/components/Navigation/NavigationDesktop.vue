<script setup lang="ts">
const { setTheme, themes } = useTheme();
function moveToCareer() { }
function moveToProfile() { }
function moveToProject() { }

</script>
<template>
<nav class="desktop-menu">
  <ul>
    <li class="desktop-menu-list" @click="moveToProfile">Profile</li>
    <li class="desktop-menu-list" @click="moveToCareer">Career</li>
    <li class="desktop-menu-list" @click="moveToProject">Project</li>
    <div class="empty-div"></div>
  </ul>
  <div
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
  border-bottom: 2px solid var(--color-accent2);
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
  /* transform: scale(1.5); */
  /* transition: transform 1s, background-color 0.3s; */
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
  position: fixed;
  top: 200px;
  right: 30px;
  width: 150px;
  background-color: var(--color-primary);
  box-shadow: 1px 1px 5px 5px var(--color-text);
}
.theme-item {
  padding: 20px;
  text-align: center;
  font-weight: 1000;
}
.theme-item:hover {
  cursor: pointer;
}
</style>