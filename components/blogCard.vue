<script setup>
const props = defineProps({
  title: String,
  description: String,
  type: String,
  date: String,
  path: String
})
</script>

<template>
  <div class="space-y-2 text-slate-800 my-5 p-3 rounded-md group shadow-2xl">
    <nuxt-link
      :to="path"
      class="text-xl font semibold group-hover:text-sky-500"
    >
      {{ title }}
      <div class="flex italic text-xs text-slate-600 items-center space-x-2">
        <icon name="material-symbols:calendar-month"/>
        <p>{{ date }}</p>
        <p>|</p>
        <p>{{ type }}</p>
      </div>
      <p class="text-slate-600 pb-2">
        {{ description }}
      </p>
    </nuxt-link>
  </div>
</template>