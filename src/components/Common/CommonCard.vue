<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/16/solid';
import type CommonModal from './CommonModal.vue';
import { isNullOrEmpty } from '@/utils/stringUtil';

const props = withDefaults(defineProps<{
  imgSrc: string;
  projectLink: string;
  gitLink: string;
  title: string;
  description: string;
  used?: string[];
  techStacks?: string[];
}>(), {
  imgSrc: '',
  projectLink: '',
  gitLink: '',
  title: '',
  description: '',
  used: undefined,
  techStacks: undefined,
});

const projectText = computed(() => {
  return isNullOrEmpty(props.projectLink) ? 'no Link' : '프로젝트 보기';
})
const gitText = computed(() => {
  return isNullOrEmpty(props.gitLink) ? 'no Github' : '깃허브 보기';
})

const modalRef = ref<InstanceType<typeof CommonModal>>();

const openModal = () => {
  modalRef.value?.open();
}
</script>
<template>
  <div class="common-card">
    <CommonImage :src="imgSrc" :alt="imgSrc" loading="eager" size=100 />
    <h3 class="title text-ellipsis">{{ title }}</h3>
    <p class="description text-ellipsis-3">{{ description }}</p>
    <slot name="content" class="content-slot" />
    <CommonButton
      class="open-button"
      text="OPEN"
      @onClick="openModal"
    />
    <CommonModal
      ref="modalRef"
      size="medium"
      :showCloseButton="true"
    >
      <template #content>
        <div class="modal-content">
          <CommonImage :src="imgSrc" :alt="imgSrc" loading="eager" size="300" class="modal-image" />
          <h3>{{ title }}</h3>
          <p v-if="used && used.length > 0">
            Used: <span class="accent">{{ used?.join(', ') }}</span>
          </p>
          <p v-if="techStacks && techStacks.length > 0">
            Tech Stacks: <span class="accent">{{ techStacks?.join(', ') }}</span>
          </p>
          <p class="modal-description">{{ description }}</p>
        </div>
      </template>
      <template #footer>
        <div class="link-container">
          <LinkIcon class="icon"/>
          <a v-if="projectText"
            :class="projectLink ? 'link-enable' : 'link-disable'"
            :href="projectLink ? projectLink : 'javascript:void(0)'"
            target="_blank"
          >
            {{ projectText }}
          </a>
          <GithubSvg class="icon"/>
          <a v-if="gitText"
            :class="gitLink ? 'link-enable' : 'link-disable'"
            :href="gitLink ? gitLink : 'javascript:void(0)'"
            target="_blank"
          >
            {{ gitText }}
          </a>
        </div>
      </template>
    </CommonModal>
  </div>
</template>
<style scoped>
.common-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: var(--color-background);
  border: 2px solid var(--color-accent2);
  border-radius: 5px;
}
.title {
  width: 100%;
  margin: 10px 0;
}
.description {
  width: 100%;
  flex-grow: 1;
}
.modal-description {
  flex-grow: 1;
  white-space: pre-line;
  padding: 5px;
  border: 2px solid var(--color-accent2);
  border-radius: 5px;
  line-height: 1.5;
}
.modal-image {
  align-self: center;
  justify-self: center;
}
.content-slot {
  flex-grow: 1;
}
.link-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0 20px 0;
}
.accent {
  color: var(--color-accent1);
}
.link-enable {
  color: var(--color-accent1);
}
.link-disable {
  color: var(--color-accent2);
  cursor: default;
}
.link-enable:hover {
  color: var(--color-text);
}
.link-disable:hover {
  text-decoration: line-through;
}
.open-button {
  align-self: flex-end;
}
</style>