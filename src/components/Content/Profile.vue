<script setup lang="ts">
import profileData from '@/content/profile.json';
import { UserCircleIcon, CalendarIcon, EnvelopeIcon, IdentificationIcon } from '@heroicons/vue/16/solid';
const { profileDOM } = storeToRefs(useScrollStore());

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
            :size=50
            :color="'currentColor'"
          />
        </div>
      </div>
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
