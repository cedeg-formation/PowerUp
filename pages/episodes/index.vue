<script lang="ts" setup>
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const episodes = await pb.collection("episodes").getFullList({
  sort: "-created",
});
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
