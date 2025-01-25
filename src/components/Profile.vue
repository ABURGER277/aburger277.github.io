<script setup lang="ts">
import profileImg from '../assets/profile_image.jpg'
  interface ImageData {
    src: string;
    alt: string;
  }

  interface profile {
    name: string;
    birth: string;
    img: ImageData;
    description: string;
  }

  const profileData: profile = {
    name: '박수진',
    birth: '1996.5.4',
    img: {
      src: profileImg,
      alt: "박수진의 프로필 이미지"
    },
    description: "안녕하세요. 나날이 발전하는 프론트엔드 개발자입니다."
  }
</script>
<template>
  <p>{{ profileData.name }}</p>
  <p>{{ profileData.birth }}</p>
  <img class="profile-img" :src="profileData.img.src" :alt="profileData.img.alt"/>
  <p>{{ profileData.description }}</p>
</template>
<style scoped>
  .profile-img {
    width: 300px;
    border-radius: 50%;
  }
</style>