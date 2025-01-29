
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { Square2StackIcon } from '@heroicons/vue/24/outline';

interface props {
  source: string;
  duration: number;
}

const props = defineProps<props>();

const { copy, copied } = useClipboard({ copiedDuring: props.duration })

const handleCopy = () => copy(props.source);
</script>
<template>
  <div
    class="icon-container"
    @click="handleCopy"
    aria-label="Copy to clipboard"
    role="button"
  >
    <transition name="slide">
      <Square2StackIcon v-if="!copied" class="icon copy-icon" key="copy" />
    </transition>

    <transition name="slide">
      <CheckCircleIcon v-if="copied" class="icon check-icon" key="check" />
    </transition>
  </div>
</template>


<style scoped>
.icon-container {
  position: relative;
  left: 5px;
  top: 2px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  align-items: center;
}

.icon {
  width: 25px;
  position: absolute;
  fill: var(--color-background);
}
.copy-icon:hover {
  cursor: pointer;
}
.check-icon {
  fill: var(--color-accent1);
}

/* transition SLIDE */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
