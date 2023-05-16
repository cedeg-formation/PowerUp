<script lang="ts" setup>
const config = useRuntimeConfig();
const { data: data } = await useFetch("about", {
  baseURL: config.public.apiBase,
  headers: {
    Accept: "application/json",
    Authorization: `Basic ${config.apiSecret}`,
  },
});

console.log(data.value);
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
