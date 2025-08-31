<script setup lang="ts">
import profileImg from '@/assets/images/profile_image.jpg';
import { UserCircleIcon, CalendarIcon, EnvelopeIcon, IdentificationIcon } from '@heroicons/vue/16/solid';
const { profileDOM } = storeToRefs(useScrollStore());

interface ImageData {
  src: string;
  alt: string;
}
interface License {
  date: Date;
  course: string;
}
interface profile {
  name: string;
  birth: string;
  mail: string;
  stacks: string[];
  github?: string;
  license?: License;
  img?: ImageData;
  description?: string;
}

const profileData: profile = {
  name: '박수진',
  birth: '1996. 5. 4',
  mail: 'aburger277@gmail.com',
  stacks: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue", "Nuxt"],
  github: 'https://github.com/ABURGER277',
  img: {
    src: profileImg,
    alt: "박수진의 프로필 이미지"
  },
  description: `
    안녕하세요. 나날이 발전하는 프론트엔드 개발자입니다.\r\n커스텀 인터랙트를 가진 컴포넌트를 제작하는것을 좋아해요.
  `
}

const refProfile = ref<HTMLElement | null>(null);

onMounted(async() => {
  profileDOM.value = refProfile.value;
})
</script>
<template>
<div ref="refProfile">
  <h1>Profile</h1>
  <div class="content-section  container-profile">
    <div class="item-profile name">
      <UserCircleIcon class="icon"/><span>{{ profileData.name }}</span>
    </div>
    <div class="item-profile birth">
      <CalendarIcon class="icon"/><span>{{ profileData.birth }}</span>
    </div>
    <div class="item-profile">
      <EnvelopeIcon class="icon"/>
      <span>{{ profileData.mail }}</span>
      <CopyCheckIcon :duration="1000" :source="profileData.mail"/>
    </div>
    <div class="item-profile">
      <GithubSvg class="icon" color="var(--color-text)" :size="20"/>
      <a :href="profileData.github">visit My Github!</a>
    </div>
    <div class="item-profile description">
      <IdentificationIcon class="icon"/><span>{{ profileData.description?.trim() }}</span>
    </div>
    <div class="item-profile stack" >
      <!-- <h3 class="stack-title">STACKS</h3> -->
      <div class="stack-icon-container">
        <div
          v-for="stack in profileData.stacks"
          :key="stack"
          class="stack-icon"
        >
          <CommonImage
            :src="`icons/${stack.toLowerCase()}.svg`"
            :size="50"
            :color="'currentColor'"
          />
        </div>
      </div>
    </div>
    <div class="item-profile">
      <span>{{ profileData.license }}</span>
    </div>
  </div>
</div>
</template>
<style scoped>
.container-profile {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.icon {
  height: 100%;
  margin-right: 5px;
}
.item-profile {
  display: flex;
  align-items: center;
}
.stack {
  /* .stack-title {
    font-size: large;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 20px
  } */
  margin-top: 50px;
  .stack-icon-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .stack-icon {
    border: 2px solid var(--color-accent2);
    border-radius: 10%;
    align-items: center;
    justify-content: center;
    padding: 10px;
    /* padding-left: 5px; */
  }
  .stack-icon:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
}
.name {
  font-size: large;
}
.description {
  white-space: pre-wrap;
  line-height: 1.5;
  word-break: keep-all;
}
</style>