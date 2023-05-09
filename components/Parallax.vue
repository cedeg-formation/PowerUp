<script lang="ts" setup>
import Parallaxy from "@lucien144/vue3-parallaxy";
const props = defineProps({
  title: String,
  imageUrl: String,
});
</script>

<template>
  <div>
    <h3 class="p-6 pb-0 text-6xl font-bold z-9">{{ title }}</h3>

    <Parallaxy class="min-w-full pt-40" :speed="100">
      <img
        alt="image des personnages de Chainsaw Man"
        class="min-w-full"
        :src="imageUrl"
      />
    </Parallaxy>
  </div>
</template>

<style scoped></style>
