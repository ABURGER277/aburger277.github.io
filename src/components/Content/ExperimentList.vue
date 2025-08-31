<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { experiments } from 'public/data/experimentList';

const { experimentDOM } = storeToRefs(useScrollStore());

const refExperiments = ref(null);
onMounted(() => {
  experimentDOM.value = refExperiments.value;
})
</script>

<template>
<div ref="refExperiments">
  <h1>Experiments</h1>
  <div class="content-section ">
    <CommonCard
      v-for="(project, index) in experiments"
      :key="index"
      :imgSrc="project.imgSrc"
      :projectLink="project.link"
      :gitLink="project.gitLink"
      :title="project.title"
      :description="project.description"
      :used="project.used"
      :techStacks="project.techStacks"
    />
  </div>
</div>
</template>

<style scoped>
/* .link-container {
  display: flex;
  align-items: center;
  margin: 20px 0;
  .icon {
    margin-left: 10px;
    margin-right: 5px;
  }
} */
.content-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
.link-disable {
  cursor: default;
}
.link-disable:hover {
  text-decoration: line-through;
}
</style>