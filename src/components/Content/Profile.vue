<script setup lang="ts">
import { storeToRefs } from 'pinia';
import profileImg from '../../assets/profile_image.jpg';
import { UserCircleIcon, CalendarIcon, EnvelopeIcon, IdentificationIcon } from '@heroicons/vue/16/solid';
import { Square2StackIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import { useClipboard } from '@vueuse/core'
const { profile } = storeToRefs(useCardStore());
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
  stacks: ["HTML", "CSS", "JS", "Vue", "Nuxt", "Java"],
  github: 'https://github.com/ABURGER277',
  img: {
    src: profileImg,
    alt: "박수진의 프로필 이미지"
  },
  description: "안녕하세요. 나날이 발전하는 프론트엔드 개발자입니다."
}

const refProfile = ref<HTMLElement | null>(null);

const { copy, copied } = useClipboard({copiedDuring: 800});

onMounted(() => {
  profile.value = refProfile.value;
})
</script>
<template>
  <div ref="refProfile">
  <h1>Profile</h1>
  <div class="card-content container-profile">
    <div class="item-profile">
      <UserCircleIcon class="icon"/><span>{{ profileData.name }}</span>
    </div>
    <div class="item-profile">
      <CalendarIcon class="icon"/><span>{{ profileData.birth }}</span>
    </div>
    <div class="item-profile">
      <EnvelopeIcon class="icon"/>
      <span>{{ profileData.mail }}</span>
      <Square2StackIcon class="icon-copy" @click="copy(profileData.mail)"/>
      <transition name="fade" mode="out-in">
        <div v-if="copied" class="arrow arrow-left">
          <CheckCircleIcon class="icon-check"/>
          복사 성공!
        </div>
      </transition>
    </div>
    <div class="item-profile">
      <GithubSvg class="icon" color="var(--color-text)" :size="20" style=""/>
      <a :href="profileData.github">visit My Github!</a>
    </div>
    <div class="item-profile">
      <IdentificationIcon class="icon"/><span>{{ profileData.description }}</span>
    </div>
    <div class="item-profile">
      <span v-for="stack in profileData.stacks" class="item-stack">{{ stack }}</span>
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
.profile-img {
  width: 300px;
  border-radius: 10px;
  margin: 10px;
}
.icon {
  margin-right: 5px;
}
.item-profile {
  display: flex;
  align-items: center;
}
.icon-copy {
  margin-left: 10px;
  min-width: 20px;
  width: 20px;
}
.icon-copy:hover {
  cursor: pointer;
}
.item-stack {
  padding-left: 5px;
}
.icon-check {
  width: 20px;
  margin-right: 2px;
}
.arrow{
  position: relative;
  width:90px;
  background: var(--color-accent1);
  height:20px;
  line-height: 20px;
  margin-left: 2px;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 5px;
  box-shadow: 1px 1px 5px var(--color-text);
}
.arrow-left:before{
    content: "";
    position: absolute;
    left: -10px;
    top: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid var(--color-accent1);
}
</style>