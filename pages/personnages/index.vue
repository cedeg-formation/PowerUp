<script lang="ts" setup>
/*const personnages = {
  0: { title: "Denji", url: "/img/chainsaw-man-episode-7.png" },
  1: { title: "Makima", url: "/img/Chainsaw-Man-Makima-2.webp" },
};*/
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const personnages = await pb.collection("personnages").getFullList({
  sort: "-created",
});
</script>

<template>
  <main>
    <PersonnagePics
      v-for="(personnage, index) in personnages"
      :title="personnage.name"
      :imageUrl="
        'http://127.0.0.1:8090/api/files/' +
        personnage.collectionId +
        '/' +
        personnage.id +
        '/' +
        personnage.image
      "
      :isOdd="index % 2"
    />
  </main>
</template>

<style scoped></style>
