<script lang="ts" setup>
const props = defineProps({
  title: String,
  imageUrl: String,
});
</script>

<template>
  <div>
    <h3 class="p-6 text-6xl font-bold">{{ title }}</h3>
    <div>
      <img alt="image des personnages de Chainsaw Man" :src="imageUrl" />
    </div>
  </div>
</template>

<style scoped></style>
