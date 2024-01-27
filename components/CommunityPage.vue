<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme';
import type { DefaultTheme } from 'vitepress';
import { eisvanaMembers } from '../variables/members';

const members: DefaultTheme.TeamMember[] = structuredClone(eisvanaMembers).map((member) => {
  if (member.medals) {
    const firstThreeMedals = member.medals.slice(0, 3); // NoSonar get first three medals
    const medalHtml = firstThreeMedals.map(
      (medal) =>
        `<span class="VPBadge ${medal.type}" title="${medal.text}"><img alt="${medal.text}" src="${medal.icon}" width="32" /></span>`
    );
    member.desc = `<div class="medals">${medalHtml.join('')}</div>${member.desc}`;
    delete member.medals;
  }

  if (member.pageLink) {
    member.desc += `<br><a href="${member.pageLink}">Read more</a>`;
    delete member.pageLink;
  }

  return member;
});
</script>

<template>
  <VPTeamMembers
    :members="members"
    size="small"
  />
</template>

<style scoped lang="scss">
:deep(.desc) {
  a {
    text-decoration-style: solid;

    &:hover {
      color: var(--vp-c-brand-2);
    }
  }

  .medals {
    margin-block-end: 0.25rem;
  }
}
</style>
