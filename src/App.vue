<script setup lang="ts">
import CareerTimeline from './components/CareerTimeline.vue';
import Divider from './components/Common/Divider.vue';
import Profile from './components/Profile.vue';
import ProjectList from './components/ProjectList.vue';
import ExperimentList from './components/ExperimentList.vue';
import Navigation from './components/Navigation/NavigationRoot.vue';

import { useTheme } from './composables/useTheme';

document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.ondragstart = () => false;

useTheme();
</script>

<template>
  <Navigation/>
  <Profile/>
  <Divider/>
  <CareerTimeline/>
  <Divider/>
  <ProjectList/>
  <Divider/>
  <ExperimentList/>
</template>

<style scoped>
</style>
