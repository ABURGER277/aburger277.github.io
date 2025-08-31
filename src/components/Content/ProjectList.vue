<script setup lang="ts">
const { projectDOM } = storeToRefs(useScrollStore());
const refProject = ref<HTMLElement | null>(null);

onMounted(() => {
  projectDOM.value = refProject.value;
})
</script>
<template>
<div ref="refProject">
  <h1>Project List</h1>
  <div class="content-section ">
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