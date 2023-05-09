<script lang="ts" setup>
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const episodes = await pb.collection("episodes").getFullList({
  sort: "-created",
});
console.log(episodes);
/*const episodes = {
  0: {
    title: "Episode",
    subTitle: "Le chien et la tronçonneuse",
    imageUrl: "/img/Chainsaw-Man-Saison-1-episode-1-1600x900.jpg",
    chapter: "1",
  },
  1: {
    title: "Episode",
    subTitle: "Le chien et la tronçonneuse",
    imageUrl: "/img/Chainsaw-Man-episode-2-780x439.jpg",
    chapter: "2-3-4-5",
  },
};*/
</script>

<template>
  <main>
    <div class="wrapper">
      <Episode
        v-for="(episode, index) in episodes"
        :title="episode.title"
        :subTitle="episode.subTitle"
        :imageUrl="
          'http://127.0.0.1:8090/api/files/' +
          episode.collectionId +
          '/' +
          episode.id +
          '/' +
          episode.image
        "
        :chapter="episode.chapters"
        :index="index"
      />
      <ArrowNav />
    </div>
  </main>
</template>

<style scoped></style>
