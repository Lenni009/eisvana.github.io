<script setup lang="ts">
import { medalCategories } from '../variables/medals';

const capitalise = (text: string) => `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
</script>

<template>
  <div class="flex">
    <table
      v-for="(category, catId) in medalCategories"
      :key="catId"
    >
      <caption class="caption">
        {{
          capitalise(catId)
        }}
      </caption>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Achievement</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(medal, medalId) in category"
          :key="medalId"
        >
          <td>
            <img
              :src="medal?.icon"
              :alt="medal?.text"
              width="64"
            />
          </td>
          <td>{{ medal?.text }}</td>
          <td>{{ medal?.achievement }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.caption {
  text-align: left;
  font-weight: bold;
}
</style>
