import { ref, watch, onMounted } from 'vue';
import themes from '../assets/themes.json';
import { useLocalStorage, useMediaQuery } from '@vueuse/core';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent1: string;
  accent2: string;
  warning: string;
  text: string;
  background: string;
}

interface Theme {
  key: string;
  name: string;
  colors: ThemeColors;
}

const themesList: Theme[] = themes;

export function useTheme() {
  const storedTheme = useLocalStorage<string>('theme', '');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const currentTheme = ref<Theme | null>(null);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    root.setAttribute('data-theme', theme.key);
  };

  const setTheme = (themeKey: string) => {
    const selectedTheme = themesList.find(theme => theme.key === themeKey);
    if (selectedTheme) {
      currentTheme.value = selectedTheme;
      applyTheme(selectedTheme);
      storedTheme.value = themeKey;
    } else {
      console.error(`Theme "${themeKey}" not found.`);
    }
  };

  onMounted(() => {
    let initialTheme: Theme | undefined;

    if (storedTheme.value) {
      initialTheme = themesList.find(theme => theme.key === storedTheme.value);
    }

    if (!initialTheme) {
      initialTheme = prefersDark.value
        ? themesList.find(theme => theme.key === 'dark')
        : themesList.find(theme => theme.key === 'light');
    }

    if (!initialTheme) {
      initialTheme = themesList[0];
    }

    if (initialTheme) {
      currentTheme.value = initialTheme;
      applyTheme(initialTheme);
    }
  });

  watch(currentTheme, (newTheme) => {
    if (newTheme) {
      storedTheme.value = newTheme.key;
    }
  });

  return {
    currentTheme,
    setTheme,
    themes: themesList,
  };
}