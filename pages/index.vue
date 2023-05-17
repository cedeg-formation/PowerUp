<script lang="ts" setup>
import PocketBase from "pocketbase";
import {Const} from "../utils/Const";

const pb = new PocketBase(Const.BASE_URL);

const episode = await pb.collection("episodes").getFirstListItem("");

console.log(episode);

// http://127.0.0.1:8090/api/files/vdczkfc42jo8hq2/9p43ibd5lnseqrf/chainsaw_man_episode_12_1600x900_UG3P3MPxnM.jpg
</script>

<template>
  <main>
    <CarouselCustom />
    <div class="wrapper">
      <Episode
        title="Derniers épisodes :"
        :subTitle="episode.title"
        :imageUrl="Const.BASE_URL + '/api/files/' + episode.collectionId + '/' + episode.id +'/' + episode.image"
        :chapter="episode.chapter"
      />
    </div>
  </main>
</template>

<style scoped></style>
