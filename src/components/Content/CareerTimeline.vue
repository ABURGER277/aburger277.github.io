<script setup lang="ts">
import { BriefcaseIcon, CalendarDateRangeIcon } from '@heroicons/vue/16/solid'
import { storeToRefs } from 'pinia';
const { career } = storeToRefs(useCardStore());

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
    position: "Frontend Junior Developer",
    responsibilities: [
      `WPF와 Nuxt3 프레임워크 위에서 신규 기능 개발 및 유지보수 작업을 진행중 입니다.
        - 사용자 기능 개선:
        -- Nested Popup / Modal ESC Handler
        - 신규 기능:
        -- 나간 상대 재초대
      `,
      `Nuxt2에서 Nuxt3로 Migartion 작업을 진행하였습니다.
        - 기존 코드 개선 작업:
        -- 불필요 및 중복 fetch요청 삭제
        -- 코드 리팩토링 및 중복 컴포넌트 정규화
        -- 개발 환경설정 개선:
        --- Components, Plugins, Composables를 AutoImport 시킴으로서 이후 개발 효율을 상승
        --- CLI > Vite로 빌드 속도가 상승
        - 클라이언트 최적화:
        -- CSS Minification
        -- Vuetify Treeshaking
        -- Nuxt2 대비 번들크기 60%감소
      `,
      `WPF기반 Webview2에서 Nuxt2를 사용하여 신규 기능을 개발했습니다.
        - 신규 기능
        -- 대화방별 배경화면
        -- 대화방별 카테고리 설정
      `,
    ],
  },
  {
    period: "2023.08 - 2024.01",
    company: "KIC 캠퍼스 (국비 학원)",
    position: "Backend Learner",
    responsibilities: [
      `Java & Spring 활용 풀스택 개발자 양성과정`
    ],
  }
];

function parseResponsibility(resp: string) {
  const lines = resp.split('\n').map(line => line.trim()).filter(line => line !== '');
  return lines.map(line => {
    const match = line.match(/^(-+)\s*(.*)/);
    if (match) {
      const level = match[1].length;
      const content = match[2].trim();
      return { level, content };
    } else {
      return { level: 0, content: line };
    }
  });
}

const refCareer = ref<HTMLElement | null>(null);

onMounted(() => {
  career.value = refCareer.value;
})
</script>
<template>
<div ref="refCareer">
  <h1>Career Timeline</h1>
  <div class="card-content">
    <div v-for="(data, index) in careerList" :key="index">
      <div class="timeline-item">
        <CalendarDateRangeIcon class="icon"/><span class="period">{{ data.period }}</span>
      </div>
      <div class="timeline-item">
        <BriefcaseIcon class="icon"/>
        <p class="company">{{ data.company }}: </p>
      </div>
      <p class="position">{{ data.position }}</p>
      <div class="timeline-item">
        <ul class="responsibilities">
          <li v-for="(responsibility, index) in data.responsibilities" :key="index">
            <span
              v-for="(line, lineIndex) in parseResponsibility(responsibility)"
              :key="lineIndex"
              :class="['resp-line', `level-${line.level}`]"
            >
              {{ line.content }}
          </span>
          </li>
        </ul>
      </div>
      <Divider
        v-if="index < careerList.length - 1"
        color="var(--color-accent2)"
      />
    </div>
  </div>
</div>
</template>
<style scoped>;
li {
  margin: 0.5rem;
}
.timeline-item {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 2px;
}
.period {
  font-weight: 700;
  font-size: larger;
}
.company {
  display: inline-block;
  font-weight: 600;
  margin-right: 5px;
}

.career-item {
  margin-bottom: 2rem;
}

/* responsibility */
.responsibilities {
  margin-top: 0.5rem;
}

.responsibility {
  margin-bottom: 0.5rem;
}

.resp-line {
  display: block;
  position: relative;
  margin-bottom: 0.5rem;
}
.level-0{
  font-weight: 700;
}
.level-1{
  font-weight: 600;
  margin-left: 0.5rem;
}
.level-2{
  font-weight: 500;
  margin-left: 1.0rem;
}
.level-3{
  font-weight: 400;
  margin-left: 1.5rem;
}
.resp-line::before {
  content: "- ";
  /* position: absolute; */
  left: 0;
  color: var(--color-accent1);
}
</style>