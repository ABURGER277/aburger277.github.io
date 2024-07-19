<script setup>
definePageMeta({

});

const {data} = await useAsyncData("blogs", () => queryContent("/").find());

const getAllPost = computed(() => {
  const allPost = data.value || [];
  const allTypes = allPost.map((post) => {
    return {
      title: post.title,
      // description: post.description,
      path: post._path,
      date: post.date,
      type: post.type
    };
  });

  allTypes.sort(function(a,b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c < d ? 1 : -1;
  });
  console.log(allTypes);
  return allTypes;
});
</script>

<template>
  <div class="container mx-auto max-w-6xl font-gmarket antialiased min-h-[82vh]">
    <div>
      <template v-for="data in getAllPost" :key="data">
        <archive-card
          :title="data.title"
          :type="data.type"
          :date="data.date"
          :path="data.path"
        />
      </template>
    </div>
  </div>
</template>