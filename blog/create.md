---
aside: false
---

<script setup lang="ts">
import MarkdownEditor from '../components/MarkdownEditor.vue';
import { computed, watchEffect } from 'vue';
import { useData } from 'vitepress';

// TODO this logic is duplicated in "contact.md". Find a way to extract it.
const { isDark } = useData();

const theme = computed(() => (isDark.value ? 'dark' : 'light'));

watchEffect(() => document.documentElement.dataset.theme = theme.value);

</script>

# Create Blog

<MarkdownEditor />
