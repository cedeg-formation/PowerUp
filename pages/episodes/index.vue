<script lang="ts" setup>
const episodes = {
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
};
</script>

<template>
  <main>
    <div class="wrapper">
      <Episode
        v-for="(episode, index) in episodes"
        :title="episode.title"
        :subTitle="episode.subTitle"
        :imageUrl="episode.imageUrl"
        :chapter="episode.chapter"
        :index="index"
      />
    </div>
  </main>
</template>

<style scoped></style>
