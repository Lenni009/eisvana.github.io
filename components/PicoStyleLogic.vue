<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useData } from 'vitepress';

const { isDark } = useData();

const theme = computed(() => (isDark.value ? 'dark' : 'light'));

watchEffect(() => (document.documentElement.dataset.theme = theme.value));
</script>

<template>
  <div class="pico">
    <slot></slot>
  </div>
</template>
