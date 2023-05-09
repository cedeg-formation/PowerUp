<script lang="ts" setup>
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
const episode = await pb.collection("episodes").getFirstListItem("");
</script>

<template>
  <main>
    <CarouselCustom />
    <div class="wrapper">
      <Episode
        title="Derniers épisodes :"
        :subTitle="episode.title"
        :imageUrl="
          'http://127.0.0.1:8090/api/files/' +
          episode.collectionId +
          '/' +
          episode.id +
          '/' +
          episode.image
        "
        :chapter="episode.chapter"
      />
    </div>
  </main>
</template>

<style scoped></style>
