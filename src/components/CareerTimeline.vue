<script setup lang="ts">
import Divider from "../components/Common/Divider.vue";

  interface Career {
    period: string;
    company: string;
    position: string;
    responsibilities: string[];
  }

  const careerList: Career[] = [
    {
      period: "2024.04 - Present",
      company: "Kaoni, 가온아이",
      position: "Frontend Developer",
      responsibilities: [
        "Nuxt2, WPF를 사용하여 기능 개발",
        "Nuxt2 => Nuxt3 Migartion",
        "Nuxt3, WPF를 사용하여 기능 개발"
      ],
    },
    {
      period: "2023.08 - 2024.01",
      company: "KIC 캠퍼스 (국비 학원)",
      position: "-",
      responsibilities: [
        "Java & Spring 활용 풀스택 개발자 양성과정"
      ],
    }
  ];
</script>
<template>
  <div v-for="(data, index) in careerList" :key="index">
    <div class="timeline-item">
      <p class="period">{{ data.period }}</p>
      <p class="company">{{ data.company }}</p>
      <p class="position">{{ data.position }}</p>
      <ul class="responsibilities">
        <li v-for="(responsibility, index) in data.responsibilities" :key="index">
          <span class="responsibility">{{ responsibility }}</span>
        </li>
      </ul>
      <Divider v-if="index < careerList.length - 1"/>
    </div>
  </div>
</template>
<style scoped>

</style>