<script lang="ts" setup>
const data = defineProps({
  isFooter: Boolean,
});

const navClass = ref("flex justify-around flex-wrap gap-2");
const ulClass = ref("flex justify-around flex-wrap gap-2");
const isFooter = data.isFooter ? data.isFooter : false;
if (isFooter) {
  navClass.value = "p-4 text-xl col-span-4";
  ulClass.value = "flex flex-col";
}
</script>

<template>
  <nav v-bind:class="navClass">
    <NuxtLink v-if="isFooter" to="/"
      ><h1 class="text-4xl font-bold py-4">PowerUp</h1></NuxtLink
    >
    <ul v-bind:class="ulClass">
      <li>
        <NuxtLink to="/" class="hover:text-amber-900">Acceuil</NuxtLink>
      </li>
      <li>
        <NuxtLink class="hover:text-amber-900" to="/about">A propos</NuxtLink>
      </li>
      <li>
        <NuxtLink class="hover:text-amber-900" to="/contact">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink class="hover:text-amber-900" to="/episodes"
          >Liste des épisodes</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="hover:text-amber-900" to="/personnages"
          >Personnages</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
