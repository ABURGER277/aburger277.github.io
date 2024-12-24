<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  gitLink: string;
}

const projects: Project[] = [
  {
    title: "TIL",
    description: "학습한 내용을 찾아보기 쉽게 정리해놓은 아카이브입니다.",
    techStack: ["Markdown", "Github Actions"],
    gitLink: "https://github.com/ABURGER277/TIL",
  },
  {
    title: "CSS-Playground",
    description: "CSS property를 이해하기 위해 각종 실험을 기록한 아카이브입니다.",
    techStack: ["CSS"],
    gitLink: "https://github.com/ABURGER277/CSS-Playground",
  },
];
</script>

<template>
  <div class="project-list">
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>사용 기술: {{ project.techStack.join(", ") }}</p>
        <a v-if="project.link" :href="project.link" target="_blank">
          프로젝트 보기
        </a>
        <a :href="project.gitLink" target="_blank">
          깃허브 보기
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>