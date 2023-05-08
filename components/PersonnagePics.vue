<script lang="ts" setup>
const props = defineProps({
  title: String,
  imageUrl: String,
  isOdd: Number,
});
</script>

<template>
  <div v-if="isOdd" class="relative">
    <h3 class="absolute p-12 text-white text-6xl right-0 font-bold">
      {{ title }}
    </h3>
    <img :alt="'photo de ' + title" :src="imageUrl" />
  </div>
  <div v-else class="relative">
    <h3 class="absolute p-12 text-white text-6xl font-bold">{{ title }}</h3>
    <img :alt="'photo de ' + title" :src="imageUrl" />
  </div>
</template>

<style scoped></style>
