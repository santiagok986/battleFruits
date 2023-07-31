<script setup>
  const route = useRoute()
  const teamsIsActive = computed(()=>{
       const path = route.path
       const pathElements = path.split("/")
       return pathElements.includes("teams")
  })
</script>
<template>
  <header class="text-white p-4 mt-6">
    <nav>
      <h1 class="text-2xl font-bold mb-3">Battle fruits</h1>
      <ul>
        <li><NuxtLink to="/" active-class="text-secondary underline">Home</NuxtLink></li>
        <li><NuxtLink to="/about" active-class="text-secondary underline">About</NuxtLink></li>
        <li><NuxtLink to="/teams" :class="teamsIsActive?'text-secondary underline':''">Teams</NuxtLink></li>
        <li><NuxtLink to="/combats" active-class="text-secondary underline">Combats</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>