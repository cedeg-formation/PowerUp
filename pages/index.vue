<script lang="ts" setup>
import { Buffer } from "buffer";
const username = "admin";
const password = "admin";
const { data: value } = await useFetch("http://0.0.0.0:8080/PowerUpAPI/about", {
  headers: {
    Accept: "application/json",
    Authorization:
      "Basic " + Buffer.from(username + ":" + password).toString("base64"),
  },
});

//'Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64')
console.log(value.value);
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
