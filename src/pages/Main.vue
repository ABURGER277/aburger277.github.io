<script setup lang="ts">
</script>
<template>
  <NavigationRoot/>
  <main id="main">
    <Profile class="content-container" ref="profileDOM"/>
    <CareerTimeline class="content-container" ref="career"/>
    <ProjectList class="content-container" ref="project"/>
    <ExperimentList class="content-container" ref="experiment"/>
  </main>
</template>
<style scoped>
#main {
  padding: 20px;
}
@media (min-width: 768px) {
  #main {
    padding-top: 60px;
  }
  .content-container {
    margin: 50px 20px
  }
}
</style>
