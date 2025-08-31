<script setup lang="ts">
withDefaults(defineProps<{
  text: string;
  disabled?: boolean;
}>(), {
  text: 'Button',
  disabled: false,
});

const attrs = useAttrs();

const emit = defineEmits<{
  (e: 'onClick', event: MouseEvent): void;
}>();
const onClick = (event: MouseEvent) => {
  emit('onClick', event);
}
</script>

<template>
  <button
    class="common-button"
    v-bind="attrs"
    @click="onClick"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<style lang="css" scoped>
/* From Uiverse.io by Gautammsharma */
.common-button {
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: var(--color-background);
  background-color: var(--color-accent1);
  border: 2px solid var(--color-accent1);
  box-shadow: 3px 3px 0px var(--color-text);
  border-radius: 10px;;
  transition: all 0.3s ease;
  cursor: pointer;
}

.common-button:hover {
  background-color: var(--color-background);
  box-shadow: 3px 3px 0px var(--color-text);
  color: var(--color-accent1);
  border: 2px solid var(--color-accent1);
}

.common-button:active {
  background-color: var(--color-accent1);
  box-shadow: none;
  color: var(--color-background);
  transform: translateY(4px);
}

</style>
