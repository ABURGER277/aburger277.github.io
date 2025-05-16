<script setup lang="ts">
const props = defineProps<
  {
    text: string;
    type?: string;
    disabled?: boolean;
    customClass?: string;
    width?: string | number;
    height?: string | number;
  }
>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
const attrs = useAttrs();

const computedWidth = computed(() => {
  switch (typeof props.width) {
    case 'string':
      if (props.width.endsWith('px') || props.width.endsWith('%')) {
        return props.width;
      } else if (props.width.endsWith('rem')) {
        return `${parseFloat(props.width) * 16}px`;
      } else if (props.width.endsWith('em')) {
        return `${parseFloat(props.width) * 16}px`;
      } else if (props.width.endsWith('vw')) {
        return `${parseFloat(props.width) * window.innerWidth / 100}px`;
      } else if (!isNaN(Number(props.width))) {
        return `${props.width}px`;
      } else if (props.width === 'auto') {
        return 'auto';
      } else {
        return props.width;
      }
    case 'number':
      return `${props.width}px`;
    default:
      return 'auto';
  }
});

const computedHeight = computed(() => {
  switch (typeof props.height) {
    case 'string':
      if (props.height.endsWith('px') || props.height.endsWith('%')) {
        return props.height;
      } else if (props.height.endsWith('rem')) {
        return `${parseFloat(props.height) * 16}px`;
      } else if (props.height.endsWith('em')) {
        return `${parseFloat(props.height) * 16}px`;
      } else if (props.height.endsWith('vh')) {
        return `${parseFloat(props.height) * window.innerHeight / 100}px`;
      } else if (!isNaN(Number(props.height))) {
        return `${props.height}px`;
      } else if (props.width === 'auto') {
        return 'auto';
      } else {
        return props.height;
      }
    case 'number':
      return `${props.height}px`;
    default:
      return 'auto';
  }
});

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  } else {
    emit('click', event);
  }
};
</script>

<template>
  <button
    :class="['common-button', customClass]"
    :style="{ width: computedWidth, height: computedHeight }"
    v-bind="attrs"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<style lang="css" scoped>
.common-button {
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #ccc;
}
.custom-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
