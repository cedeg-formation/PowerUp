<script lang="ts" setup>
import { Buffer } from "buffer";
const config = useRuntimeConfig();
const { data: value } = await useFetch("about", {
  baseURL: config.public.apiBase,
  headers: {
    Accept: "application/json",
    Authorization:
      "Basic " +
      Buffer.from("admin" + ":" + config.apiSecret).toString("base64"),
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
