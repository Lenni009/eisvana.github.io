<script setup lang="ts">
import PicoStyleLogic from './PicoStyleLogic.vue';
</script>

<template>
  <ClientOnly>
    <PicoStyleLogic>
      <slot></slot>
    </PicoStyleLogic>
  </ClientOnly>
</template>
