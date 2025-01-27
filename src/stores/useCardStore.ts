import { defineStore } from "pinia";

export const useCardStore = defineStore('card', () => {
  const profile = ref<HTMLElement | null>(null);
  const career = ref<HTMLElement | null>(null);
  const project = ref<HTMLElement | null>(null);
  const experiment = ref<HTMLElement | null>(null);
  return {
    profile,
    career,
    project,
    experiment,
  }
})