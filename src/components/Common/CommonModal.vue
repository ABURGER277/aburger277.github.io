<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';

const isClosing = ref(false);
const visible = ref(false);
const data = ref(null);
const props = withDefaults(
  defineProps<{
    size?: 'small' | 'medium' | 'large';
    showCloseButton?: boolean;
  }>(),
  {
    size: 'small',
    showCloseButton: true,
  }
);

const TIME_ANMIATION = 300; // 애니메이션 시간 (ms)

const open = (modalData?: any) => {
  data.value = modalData;
  visible.value = true;
  if (modalData) {
    console.log(modalData);
  }
};
const close = () => {
  isClosing.value = true;
  setTimeout(() => {
    visible.value = false;
    isClosing.value = false;
  }, TIME_ANMIATION);
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
};
onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
});

defineExpose({
  open,
  close,
});
</script>

<template>
  <div v-if="visible" class="modal">
    <div
      class="modal-overlay"
      @click="close()"
    ></div>
    <div
      class="modal-container"
      :class="[
        `modal-${props.size}`,
        { closing: isClosing }
      ]"
    >
      <!-- 헤더 슬롯 -->
      <slot name="header">
        <div class="modal-header">
          <XMarkIcon
            v-if="props.showCloseButton"
            class="close-button pointer"
            @click="close"
          />
        </div>
      </slot>

      <!-- 컨텐츠 슬롯 -->
      <div class="modal-content">
        <slot
          name="content"
          :data="data"
        ></slot>
      </div>

      <!-- 푸터 슬롯 -->
      <slot
        name="footer"
      ></slot>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-small {
  max-width: 500px;
}
.modal-medium {
  max-width: 700px;
}
.modal-large {
  max-width: 1000px;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background-color: var(--color-text);
  opacity: 0.5;
  backdrop-filter: blur(2px);
}

.modal-container {
  position: relative;
  background-color: var(--color-primary);
  border: 3px solid var(--color-primary);
  border-radius: 12px;
  box-shadow: 0 8px 24px var(--color-text);
  width: 90%;
  max-height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
  animation: modalOpen 0.3s ease forwards;
}

.modal-container.closing {
  animation: modalClose 0.3s ease forwards;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  color: var(--color-text);
  align-self: end;
  width: 25px;
  padding: 10px;
  right: 0;
}
.close-button:hover {
  transform: rotate(90deg);
}

.modal-content {
  padding: 0 20px 20px 20px;
}

.content-image {
  width: 100%;
  height: 200px;
  background: #f2f2f2;
}

@keyframes modalOpen {
  0% {
    opacity: 0;
    transform: perspective(600px) translateY(30px) rotateX(-15deg) scale(0.8);
    filter: blur(4px);
  }
  60% {
    opacity: 1;
    transform: perspective(600px) translateY(-10px) rotateX(5deg) scale(1.05);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: perspective(600px) translateY(0) rotateX(0) scale(1);
  }
}
@keyframes modalClose {
  0% {
    opacity: 1;
    transform: perspective(600px) translateY(0) rotateX(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: perspective(600px) translateY(20px) rotateX(15deg) scale(0.8);
    filter: blur(4px);
  }
}
</style>
