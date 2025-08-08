
<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  color?: string;
  size?: number;
}>();

const isIcon = computed(() => {
  return props.src.endsWith('.svg');
});

const symbolId = computed(() => {
  if (!isIcon.value) return '';
  const iconName = props.src.split('/').pop()?.replace(/\.svg$/, '') || '';
  return `#icon-${iconName}`;
});

const iconStyle = computed(() => {
  if (!props.size) return {};
  return {
    width: `${props.size}px`,
    height: `${props.size}px`
  };
});

const currentImageSrc = ref('');
const imageLoadErrorOccurred = ref(false);

watchEffect(() => {
  if (!isIcon.value) {
    imageLoadErrorOccurred.value = false;
    currentImageSrc.value = props.src;
  }
});

const handleImageError = () => {
  if (!imageLoadErrorOccurred.value && props.fallbackSrc) {
    console.warn(
      `Image failed to load: ${props.src}.\n` +
      `Attempting fallback: ${props.fallbackSrc}`
    );
    currentImageSrc.value = props.fallbackSrc;
  }
  imageLoadErrorOccurred.value = true;
};
</script>
<template>
  <svg v-if="isIcon" aria-hidden="true" class="svg-icon" v-bind="$attrs" :style="iconStyle">
    <use :href="symbolId" :fill="color" />
  </svg>
  <img
    v-else
    :key="`image-${props.src}`"
    v-bind="$attrs"
    :src="currentImageSrc"
    :alt="alt"
    :loading="loading ?? 'lazy'"
    @error="handleImageError"
  />
</template>
<style scoped>
.common-image {
  display: inline-block;
}

.svg-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  overflow: hidden;
}

/* width와 height가 지정된 경우 SVG 크기 조정 */
.svg-icon[width],
.svg-icon[height] {
  width: var(--svg-width, attr(width));
  height: var(--svg-height, attr(height));
}
</style>