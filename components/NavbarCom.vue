<script setup>
const route = useRoute();
const theme = ref("light");
const activeNavbar = computed(() => {
  const path = route.fullPath;
  const splitedPath = path.split("/");
  const navbarName = splitedPath[1];
  return navbarName;
});
</script>

<template>
  <header class="sticky top-0 p-3 bg-[#a2d9ff] font-gmarket">
    <div class="conatiner px-4 mx-auto max-w-6xl flex justify-between">
      <ul class="flex space-x-8 items-center">
        <li>
          <nuxt-link
            class="font-semibold text-base"
            :class="{ 'text-blue-500 border-b-2 border-blue-500 font-bold': activeNavbar === '' }"
            to="/"
          >
            <img src="/logo.png" style="width: 100px; height: 100px;"/>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :class="{ 'text-blue-500 border-b-2 border-blue-500 font-bold': activeNavbar === 'blogs' }"
            to="/blogs"
            >Blogs</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            :class="{ 'text-blue-500 border-b-2 border-blue-500 font-bold': activeNavbar === 'tags' }"
            to="/tags"
            >Tags</nuxt-link
            >
        </li>
        <li>
          <nuxt-link
            :class="{ 'text-blue-500 border-b-2 border-blue-500 font-bold': activeNavbar === 'about' }"
            to="/about"
            >About</nuxt-link
          >
        </li>
      </ul>
      <ul class="flex space-x-8 items-center">
        <li v-show="theme === 'light'" @click="theme = 'dark'">
          <nuxt-link to="#">
            <icon size="25px" name="ph:sun-dim"/>
          </nuxt-link>
        </li>
        <li v-show="theme === 'dark'" @click="theme = 'light'">
          <nuxt-link to="#">
            <icon size="25px" name="ph:moon-stars"/>
          </nuxt-link>
        </li>
      </ul>
    </div>
</header>
</template>