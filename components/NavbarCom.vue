<script setup>
const route = useRoute();
const activeNavbar = computed(() => {
  const path = route.fullPath;
  const splitedPath = path.split("/");
  const navbarName = splitedPath[1];
  console.log(navbarName);
  return navbarName;
});

// const isDark = ref(false)

// watch(isDark, (newVal) => {
//   if (newVal) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
// })
</script>

<template>
  <header class="sticky bg-[#a2d9ff] dark:bg-[#2b2b2b] top-0 p-3 font-gmarket">
    <div class="conatiner px-4 mx-auto max-w-6xl flex justify-between">
      <ul class="flex space-x-8 items-center">
        <li>
          <nuxt-link
            class="font-semibold text-base"
            :class="{ 'text-blue-500 border-b-2 border-blue-500 font-bold': activeNavbar === '' }"
            to="/"
          >
            <img src="/logo.png" style="width: 50px; height: 50px;"/>
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
      <!-- <ul class="flex space-x-2 items-center">
        <li>
            <icon size="25px" name="ph:sun-dim"/>
        </li>
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isDark" class="sr-only peer">
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
        </label>
        <li>
            <icon size="25px" name="ph:moon-stars"/>
        </li>
      </ul> -->
    </div>

  </header>
</template>