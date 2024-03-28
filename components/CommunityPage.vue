<script setup lang="ts">
import CommunityMemberCard from '../components/CommunityMemberCard.vue';
import { eisvanaMembers } from '../variables/members';
</script>

<template>
  <CommunityMemberCard :eisvana-members="eisvanaMembers" />
</template>
