<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

const { isDark } = useData();

const theme = computed(() => (isDark.value ? 'dark' : 'light'));
</script>

<template>
  <iframe
    class="discord-widget"
    title="Eisvana's Discord"
    :src="`https://discord.com/widget?id=812176491617976330&theme=${theme}`"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  ></iframe>
</template>

<style scoped lang="scss">
.discord-widget {
  display: block;
  border: 1px solid;
  border-color: lightgray;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  width: 350px;
  height: 500px;
}
</style>
