<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

defineProps<{
  item: string;
  subItems: string[];
  useArrow?: boolean;
}>();

const menuVisible = ref(false);

const toggleDropdown = () => {
  menuVisible.value = !menuVisible.value;
}
</script>
<template>
  <div class="dropdown">
    <div class="dropdown-toggle" :class="{ 'active': menuVisible }" @click="toggleDropdown">
      <ChevronDownIcon v-if="useArrow" class="arrow" :class="menuVisible ? 'rotate' : ''" />
      {{ item }}
    </div>
    <div class="dropdown-menu pointer" :class="menuVisible ? 'show' : 'hide'" @click="toggleDropdown">
      <div v-for="subItem in subItems" :key="subItem">
        {{ subItem }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.dropdown {
  width: fit-content;
}
.dropdown-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  .arrow {
    width: 16px;
    height: 16px;
    transition: transform 0.5s linear;
  }
  .rotate {
    transform: rotate(180deg);
  }
}
.dropdown-toggle.active {
  color: var(--color-accent1);
}
.dropdown-toggle:hover {
  color: var(--color-accent1);
}
.dropdown-menu {
  background-color: var(--color-primary);
  border: 1px solid var(--color-accent1);
  border-radius: 10px;
  padding: 10px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.5s linear;
  margin: 3px 0;
}
.dropdown-menu.show {
  max-height: 500px;
  opacity: 1;
  margin-top: 8px;
}
.dropdown-menu.hide {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
}
</style>