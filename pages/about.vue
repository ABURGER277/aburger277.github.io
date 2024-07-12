<script setup>
definePageMeta({
  layout: "list",
});
</script>

<template>
  <div class="container mx-auto max-w-6xl font-mono antialiased min-h-[82vh]">
    <div class="flex gap-14">
      <div class="m-2 rounded-lg object-cover">
        <img
          class="rounded-lg h-48"
          src="/logo.png"
          alt="profile Img"
        >
      </div>
      <div class="basis-3/4 bg-white p-4 rounded-lg">
        <div class="pb-3">
          <h1 class="font-semibold text-xl">GitHublog by ABurger</h1>
          <h3>Vue3/Nuxt/JavaScript로 만든 블로그입니다.</h3>
        </div>
        <p>블로그 소스코드는 Footer의 깃허브에 공유되어 있습니다.</p>
        <p>Light&Dark Mode 미완성입니다.</p>
      </div>
    </div>
  </div>
</template>