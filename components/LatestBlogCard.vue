<script setup>
const props = defineProps({
  title: String,
  description: String,
  date: String,
  path: String
})
</script>

<template>
  <div class="basis-1/2 bg-white mx-5 my-2 p-5 max-w-[530px] rounded-md shadow-lg group">
    <nuxt-link :to="path" class="group-hover:text-sky-500">
      <h4 class="text-xl font-medium py-1"> {{ title }} </h4>
      <div class="text-xs text-slate-500 pb-3 flex space-x-4">
        <div class="flex items-center space-x-1">
          <icon name="material-symbols:av-timer"/>
          <span class=""> {{ date }} </span>
        </div>
      </div>
      <p class="pb-2 text-slate-600"> {{ description }} </p>
    </nuxt-link>
  </div>
</template>
