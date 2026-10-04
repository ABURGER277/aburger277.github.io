<script setup lang="ts">
import siteContent from '@/content/site.json';
import projectData from '@/content/projects.json';

type Project = {
  title: string;
  description: string;
  techStacks?: string[];
  used?: string[];
  link?: string;
  gitLink?: string;
  imgSrc?: string;
};

const projects: Project[] = projectData;
const { projectDOM } = storeToRefs(useScrollStore());
const refProject = ref<HTMLElement | null>(null);

onMounted(() => {
  projectDOM.value = refProject.value;
})
</script>
<template>
<div ref="refProject">
  <h1>{{ siteContent.headings.project }}</h1>
  <div v-if="projects.length" class="content-section">
    <CommonCard
      v-for="(project, index) in projects"
      :key="index"
      :imgSrc="project.imgSrc ?? ''"
      :projectLink="project.link ?? ''"
      :gitLink="project.gitLink ?? ''"
      :title="project.title"
      :description="project.description"
      :used="project.used"
      :techStacks="project.techStacks"
    />
  </div>
  <div v-else class="content-section">
    <h3>{{ siteContent.projectPlaceholder }}</h3>
  </div>
</div>
</template>

<style scoped>
.content-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
</style>
