<script setup>
const props = defineProps({
  type: String,
  count: Number,
  path: String
})
</script>

<template>
  <div class="basis-1/5 bg-white mx-5 my-2 p-3 rounded-3xl shadow-lg group text-slate-800">
    <nuxt-link :to="`/tags/${path}`" class="group-hover:text-sky-500">
      <div class="flex items-center">
        <icon :name="`logos:${type}`" size="40px" class="p-4 rounded"/>
        &nbsp;
        <h4 class="text-xl font-medium py-1"> {{ type.toLocaleUpperCase() }} </h4><p> &nbsp;({{ count }})</p>
      </div>
    </nuxt-link>
  </div>
</template>