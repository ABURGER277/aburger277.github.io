<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { project } = storeToRefs(useCardStore());
const refProject = ref<HTMLElement | null>(null);

onMounted(() => {
  project.value = refProject.value;
})
</script>

<template>
<div>
  <h1>Project List</h1>
  <div class="card-content" ref="refProject">
    <h3>작성중 입니다.</h3>
    <!-- <ul>
      <li v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>
          사용 기술: {{ project.techStack.join(", ") }}
        </p>
        <a v-if="project.link" :href="project.link" target="_blank">
          프로젝트 보기
        </a>
        <a :href="project.gitLink" target="_blank">
          깃허브 보기
        </a>
      </li>
    </ul> -->
  </div>
</div>
</template>

<style scoped>
</style>