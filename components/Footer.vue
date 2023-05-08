<script lang="ts" setup></script>

<template>
  <footer class="bg-amber-400 text-amber-700">
    <div class="wrapper grid grid-cols-6">
      <nav class="p-4 text-xl col-span-4">
        <NuxtLink to="/"
          ><h1 class="text-4xl font-bold py-4">PowerUp</h1></NuxtLink
        >
        <ul class="flex flex-col">
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
      <div class="flex items-center col-span-2">
        <img
          class="max-w-full mix-blend-multiply p-4"
          alt="image de pochita"
          src="/img/wp9532701.jpeg"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
