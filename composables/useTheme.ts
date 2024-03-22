import { useData } from 'vitepress';
import { computed } from 'vue';

export function useTheme() {
  const { isDark } = useData();

  const theme = computed(() => (isDark.value ? 'dark' : 'light'));

  return { theme };
}
