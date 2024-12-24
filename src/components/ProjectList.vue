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
    title: "TEST1",
    description: "바닐라 자바스크립트로 만든 CSS-Playground Archive페이지",
    techStack: ["CSS", "Javascript"],
    link: "https://google.com",
    gitLink: "https://github.com/ABURGER277/CSS-Playground",
  },
  {
    title: "TEST2",
    description: "Vue.js와 Nuxt3를 사용하여 개인 포트폴리오 웹사이트를 제작.",
    techStack: ["Vue.js"],
    link: "https://google.com",
    gitLink: "https://github.com/ABURGER277/aburger277.github.io"
  },
  {
    title: "TEST3",
    description: "할 일 관리를 위해 만든 데스크톱 애플리케이션",
    techStack: ["Electron", "Javascript"],
    // link: "https://google.com",
    gitLink: "https://google.com",
  },
];
</script>

<template>
  <div class="project-list">
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>
          <p>사용 기술:</p> {{ project.techStack.join(", ") }}
        </p>
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