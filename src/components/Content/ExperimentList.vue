<script setup lang="ts">
import { storeToRefs } from 'pinia';
const { experiment } = storeToRefs(useCardStore());

const refExperiment = ref(null);
onMounted(() => {
  experiment.value = refExperiment.value;
})

interface Project {
  title: string;
  description: string;
  techStacks?: string[];
  used?: string[]; // 사용 라이브러리, 호스팅 툴 정리
  link?: string;
  gitLink?: string;
}

const projects: Project[] = [
{
    title: "Portfolio",
    description: "(This site) Vue3를 사용하여 개인 포트폴리오 웹사이트를 제작하였습니다.",
    techStacks: ["Vue.js", "Typescript"],
    used: ["vueUse", "githubPage", "Vite"],
    link: "https://aburger277.github.io/",
    gitLink: "https://github.com/ABURGER277/aburger277.github.io"
  },
  {
    title: "Todo-List (WindowApp)",
    description: "Node Electron 기반 Todo-list 데스크톱 애플리케이션을 제작중입니다.",
    techStacks: ["Electron", "Javascript"],
    // link: "https://google.com",
    // gitLink: "https://google.com",
  },
  {
    title: "TIL",
    description: "학습한 내용을 찾아보기 쉽게 정리해놓은 아카이브입니다.",
    used: ["Markdown", "Github Actions"],
    gitLink: "https://github.com/ABURGER277/TIL",
  },
  {
    title: "Playground",
    description: "Javascript, CSS 테스트를 위해 각종 실험을 기록한 아카이브입니다.",
    techStacks: ["vanillaJS", "CSS"],
    used: ["Vercel"],
    link: "https://playground-bice-three.vercel.app",
    gitLink: "https://github.com/ABURGER277/Playground",
  },
];

onMounted(() => {

})
</script>

<template>
<div ref="refExperiment">
  <h1>Experiments</h1>
  <div class="card-content">
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <h3> <{{ project.title }}> </h3>
        <p>{{ project.description }}</p>
        <p><strong>used Skill:</strong> {{ project.techStacks?.join(", ") }}</p>
        <p><strong>used Tool:</strong> {{ project.used?.join(", ") }}</p>
        <a v-if="project.link" :href="project.link" target="_blank">
          프로젝트 보기
        </a>
        <a v-if="project.gitLink" :href="project.gitLink" target="_blank">
          깃허브 보기
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>
</style>