<script setup lang="ts">
import { computed } from 'vue';

interface DividerStyle {
  thickness?: number;
  color?: string;
  direction?: "horizontal" | "vertical";
}
const props = defineProps<DividerStyle>();

const color = computed(() => props.color ?? "var(--color-primary)");
const dividerStyle = computed(() => {
  if (props.direction === "vertical") {
    return {
      width: `${props.thickness ?? 2}px`,
      height: "100%",
    };
  } else {
    return {
      width: "100%",
      height: `${props.thickness ?? 2}px`,
    };
  }
});
</script>
<template>
  <div
    class="divider"
    :style="{
      ...dividerStyle,
      'background-color': color,
    }"
  ></div>
</template>
<style scoped>
</style>