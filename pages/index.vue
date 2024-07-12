<script setup>
const {data} = await useAsyncData("index", () => queryContent("/").find());

const getAllTag = computed(() => {
  const allPost = data.value || [];
  const allTypes = allPost.map((post) => post.type);
  const uniqType = new Set(allTypes);
  return uniqType;
})

const getRecentContent = computed(() => {
  const allPost = data.value || [];
  const customizePost = allPost.map((post) => {
    return {
      title: post.title,
      description: post.description,
      path: post._path,
      type: post.type,
      date: post.date
    };
  });

  customizePost.sort(function(a,b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c < d ? 1 : -1;
  });
  return customizePost;
});
</script>

<template>
  <div
    class="container px-4 mx-auto max-w-6xl flex font-gmarket gap-14 antialiased min-h-[82vh]"
  >
    <div class="flex-1">
      <h1 class="text-xl pb-8 text-[#e60067]">RECENTLY PUBLISHED</h1>
      <div class="space-y-8">
        <!-- <blog-card v-for="n in 7" :key="n" /> -->
        <template v-for="data in getRecentContent" :key="data">
          <blog-card
            :title="data.title"
            :description="data.description"
            :path="data.path"
            :type="data.type"
            :date="data.date"
          />
        </template>
      </div>
    </div>
    <div class="basis-1/4">
      <div>
        <h2 class="text-xl pb-8 text-[#e60067]">TOP CATEGORIES</h2>
        <template v-for="data in getAllTag" :key="data">
          <topic-card :data="data"/>
        </template>
      </div>
    </div>
  </div>
</template>