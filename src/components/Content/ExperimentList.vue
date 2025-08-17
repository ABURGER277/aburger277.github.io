<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { LinkIcon } from '@heroicons/vue/16/solid';
import Divider from '../Common/Divider.vue';
import { experiments } from 'public/data/experimentList';

const { experiment } = storeToRefs(useCardStore());

const refExperiments = ref(null);
onMounted(() => {
  experiment.value = refExperiments.value;
})

const showDividerOnBottom = (index: number) => {
  return index !== experiments.length - 1;
}
</script>

<template>
<div ref="refExperiments">
  <h1>Experiments</h1>
  <div class="card-content">
    <ul>
      <li v-for="(project, index) in experiments" :key="index">
        <h3 style="opacity: 0.8;"> [{{ project.title }}] </h3>
        <p>{{ project.description }}</p>
        <p><strong>used Skill:</strong> {{ project.techStacks?.join(", ") }}</p>
        <p><strong>used Tool:</strong> {{ project.used?.join(", ") }}</p>
        <div class="link-container">
          <LinkIcon class="icon"/>
          <a v-if="project.link" :href="project.link" target="_blank">
            프로젝트 보기
          </a>
          <a v-else class="link-disable"> no Link </a>
          <GithubSvg class="icon"/>
          <a v-if="project.gitLink" :href="project.gitLink" target="_blank">
            깃허브 보기
          </a>
          <a v-else class="link-disable"> no Github </a>
        </div>
        <Divider v-if="showDividerOnBottom(index)"/>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>
.link-container {
  display: flex;
  align-items: center;
  margin: 20px 0;
  .icon {
    margin-left: 10px;
    margin-right: 5px;
  }
}
.link-disable {
  cursor: default;
}
.link-disable:hover {
  text-decoration: line-through;
}
</style>