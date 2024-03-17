import { computed, watchEffect } from 'vue';
import { useData } from 'vitepress';

export function usePicoTheme() {
  const { isDark } = useData();

  const theme = computed(() => (isDark.value ? 'dark' : 'light'));

  watchEffect(() => (document.documentElement.dataset.theme = theme.value));
}
