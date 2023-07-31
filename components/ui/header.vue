<script setup>
  const route = useRoute()
  const teamsIsActive = computed(()=>{
       const path = route.path
       const pathElements = path.split("/")
       return pathElements.includes("teams")
  })
</script>
<template>
  <header class="mb-3 bg-primary p-5 shadow-md text-white">
    <nav class="flex justify-between w-8/12 mx-auto items-center">
      <h1 class="text-2xl font-bold">Battle fruits</h1>
      <ul class="flex gap-2">
        <li><NuxtLink to="/" active-class="text-secondary underline">Home</NuxtLink></li>
        <li><NuxtLink to="/about" active-class="text-secondary underline">About</NuxtLink></li>
        <li><NuxtLink to="/teams" :class="teamsIsActive?'text-secondary underline':''">Teams</NuxtLink></li>
        <li><NuxtLink to="/combats" active-class="text-secondary underline">Combats</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>