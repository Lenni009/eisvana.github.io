---
prev:
  text: Community
  link: .
next: false
---

<script setup lang="ts">
import { eisvanaMembers } from '/variables/members';

// Enter your name here
const memberName = 'Lenni';

const playerIndex = eisvanaMembers.findIndex((member) => member.name === memberName);
const playerObj = eisvanaMembers[playerIndex];
const medals = playerObj.medals;
</script>

# Lenni

## About Me

Hi, I'm Lenni. I do a lot of coding and a lot of wiki.

## Gameplay Interests

I do documentation. That means I take tons of screenshots and upload them to the wiki.

## Departments

I'm the Head Scholar, and also have the Director position in the Bridge Crew. This means I handle all of our political stuff, as well as our wiki.

## Medals

<span v-for="medal in medals" :class="medal.type" :title="medal.text" class="VPBadge"><img :alt="medal.text" :src="medal.icon" class="medal" width="64" /></span>

## Contact

**Discord**: lenni009
<br>
**Reddit**: [u/Lenni009](https://www.reddit.com/user/Lenni009/)
