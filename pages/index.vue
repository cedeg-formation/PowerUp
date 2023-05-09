<script lang="ts" setup>
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const episodes = await pb.collection("episodes").getFullList({
  sort: "-created",
});
console.log(episodes);
</script>

<template>
  <main>
    <CarouselCustom />
    <div class="wrapper">
      <Episode
        title="Derniers épisodes :"
        subTitle="Katana VS tronçonneuse"
        imageUrl="/img/Chainsaw-Man-episode-12-1600x900.jpg"
        chapter="35-36-37-38-39-40"
      />
    </div>
  </main>
</template>

<style scoped></style>
