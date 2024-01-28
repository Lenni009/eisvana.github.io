<script setup lang="ts">
import { eisvanaMembers } from '../variables/members';

const props = defineProps<{
  name: string;
}>();

const playerIndex = eisvanaMembers.findIndex((member) => member.name === props.name);
const playerObj = eisvanaMembers[playerIndex];
const medals = playerObj.medals;
</script>

<template>
  <span
    v-for="medal in medals"
    :class="medal.type"
    :title="medal.text"
    class="VPBadge"
    ><img
      :alt="medal.text"
      :src="medal.icon"
      class="medal"
      width="64"
    />
    <div
      class="medal-amount"
    >
      {{ medal.amount ?? 1 }}x
    </div>
  </span>
</template>

<style scoped lang="scss">
.medal {
  margin: 0.25rem;
}

.medal-amount {
  text-align: center;
}
</style>
