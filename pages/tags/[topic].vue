<script setup>
definePageMeta({
  layout: "list",
});

const router = useRoute();
const routeType = computed(() => {
  return router.params.topic || "";
})

const { data } = await useAsyncData("topic", () => queryContent(`/${routeType.value}`).find());
const typeName = computed(() => {
  const t = data.value?.[0]?.type || "";
  console.log('typeName: ', t);
  return t.toUpperCase();
})

const getAllBlog = computed(() => {
  const allPost = data.value || [];
  const allTypes = allPost.map((post) => {
    return {
      title: post.title,
      description: post.description,
      path: post._path,
      date: post.date
    };
  });

  allTypes.sort(function(a,b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c < d ? 1 : -1;
  });
  console.log('allTypes in [topic.vue]', allTypes)
  return allTypes;
});
</script>

<template>
  <div class="container mx-auto max-w-6xl font-gmarket antialiased min-h-[82vh]">
    <div class="flex justify-between flex-wrap">
      <template v-for="data in getAllBlog" :key="data">
        <latest-blog-card
          :title="data.title"
          :description="data.description"
          :path="data.path"
          :date="data.date"
        />
      </template>
    </div>
  </div>
</template>