<script lang="ts" setup></script>

<template>
  <header class="bg-amber-400 text-amber-700">
    <div class="wrapper p-6 text-center">
      <NuxtLink to="/"
        ><h1 class="text-4xl font-bold py-4">PowerUp</h1></NuxtLink
      >
      <h2 class="text-2xl py-4">
        Le fan site pas offciel du tout de Chainsaw Man
      </h2>
      <nav class="py-4 text-xl">
        <ul class="flex justify-around">
          <li>
            <NuxtLink to="/" class="hover:text-amber-900">Acceuil</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:text-amber-900" to="/">A propos</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:text-amber-900" to="/">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:text-amber-900" to="/"
              >Liste des épisodes</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="hover:text-amber-900" to="/">Personnages</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
