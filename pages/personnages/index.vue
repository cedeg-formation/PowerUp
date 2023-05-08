<script lang="ts" setup>
const personnages = {
  0: { title: "Denji", url: "/img/chainsaw-man-episode-7.png" },
  1: { title: "Makima", url: "/img/Chainsaw-Man-Makima-2.webp" },
};
</script>

<template>
  <main>
    <PersonnagePics
      v-for="(personnage, index) in personnages"
      :title="personnage.title"
      :imageUrl="personnage.url"
      :isOdd="index % 2"
    />
  </main>
</template>

<style scoped></style>
