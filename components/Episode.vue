<script lang="ts" setup>
const props = defineProps({
  title: String,
  subTitle: String,
  imageUrl: String,
  chapter: String,
});

let getChapter = props.chapter;
let split = getChapter?.split("-");
const isChapterPlural = split?.length > 1 ? true : false;
</script>

<template>
  <div class="bg-amber-400 mb-40 mx-6 mt-6">
    <h3 class="text-2xl">{{ title }}</h3>
    <h4 class="text-4xl uppercase font-bold">{{ subTitle }}</h4>
    <div class="grid grid-cols-2 translate-y-16">
      <img alt="image de l'épisode" :src="imageUrl" />

      <p class="justify-end flex text-xl font-bold pr-6">
        {{ isChapterPlural ? "Chapitres :" : "Chapitre :" }} {{ chapter }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
