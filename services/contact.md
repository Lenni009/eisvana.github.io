<script setup lang="ts">
import ContactForm from '../components/ContactForm.vue';
import { computed, watchEffect } from 'vue';
import { useData } from 'vitepress';

// TODO this logic is duplicated in "create.md". Find a way to extract it.
const { isDark } = useData();

const theme = computed(() => (isDark.value ? 'dark' : 'light'));

watchEffect(() => document.documentElement.dataset.theme = theme.value);
</script>

# Applications / Bridge Contact

We are always looking for people to join our departments! We are also eager to receive feedback and suggestions from our citizens. If you have any feedback, want to join a department or even become a department manager, please don't hesitate to fill out the contact form below and let us know. We will review your request and get in touch with you as soon as we can. You can also directly message any Bridge member on Discord.

::: info
You should be a citizen if you are applying for a department.
<br>
Citizenship is mandatory for manager positions.

Related: [Census](./census)
:::

<ContactForm />
