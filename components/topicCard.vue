<script setup>
const props = defineProps({
  data: String
})

const router = useRouter();

const onClick = () => {
  router.push(`/tags/${props.data?.toLocaleLowerCase()}`);
}
</script>

<template>
  <button
    @click="onClick"
    class="bg-[#a2d9ff] px-2 py-1 m-2 transition hover:scale-105 rounded-md"
  >
    {{ data }}
  </button>
</template>