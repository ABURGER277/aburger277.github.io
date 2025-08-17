import { defineStore } from "pinia";

export const useScrollStore = defineStore('scroll', () => {
  const profileDOM = ref<HTMLElement | null>(null);
  const careerDOM = ref<HTMLElement | null>(null);
  const projectDOM = ref<HTMLElement | null>(null);
  const experimentDOM = ref<HTMLElement | null>(null);
  return {
    profileDOM,
    careerDOM,
    projectDOM,
    experimentDOM,
  }
})