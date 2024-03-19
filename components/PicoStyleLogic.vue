<script setup lang="ts">
import { watchEffect } from 'vue';
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();

watchEffect(() => (document.documentElement.dataset.theme = theme.value));
</script>

<template>
  <div class="pico">
    <slot></slot>
  </div>
</template>
