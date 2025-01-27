<script setup lang="ts">
</script>
<template>
  <main id="main">
    <Profile class="contentCard" ref="profile"/>
    <CareerTimeline class="contentCard" ref="career"/>
    <ProjectList class="contentCard" ref="project"/>
    <ExperimentList class="contentCard" ref="experiment"/>
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
}
.contentCard {
  margin: 50px 20px;
}
</style>
