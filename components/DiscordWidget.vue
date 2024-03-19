<script setup lang="ts">
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();
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
