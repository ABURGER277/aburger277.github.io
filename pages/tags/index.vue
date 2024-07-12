<script setup>
definePageMeta({
  layout: "list",
});

const { data } = await useAsyncData("home", () => queryContent("/").find());

const getTopCategory = computed(() => {
  const allPost = data.value || [];
  const allTypes = allPost.map((post) => post.type);
  const uniqType = new Set(allTypes);
  const currentObject = [];
  uniqType.forEach((type) => {
    const filterWithType = allPost.filter((post) => post.type === type);
    const path = filterWithType[0]._path ? filterWithType[0]._path.split("/")[1] : "";
    currentObject.push({
      type: type,
      count: filterWithType.length || 0,
      path: path
    });
  });
  return currentObject;
})
</script>

<template>
  <div class="container mx-auto max-w-6xl font-gmarket antialiased min-h-[82vh]">
    <div class="flex justify-between flex-wrap">
      <template v-for="data in getTopCategory" :key="data">
        <category-card
          :type="data.type"
          :count="data.count"
          :path="data.path"
        />
      </template>
    </div>
  </div>
</template>