<script setup>
const route = useRoute();

const hasChild = computed(()=>{
  return route.params.member
})

const { data: team, pending, error } = await useFetch("/api/team", {
  params: { id: route.params.id },
  pick: ["id", "name", "description", "members"],
});
</script>

<template>
  <div v-if="pending">
    <div class="flex justify-center mt-48 text-secondary"><ui-spinner></ui-spinner></div>
  </div>
  <div v-if="team" class="flex flex-wrap">
    <div class="w-2/6 px-4">
      <div class="bg-white shadow-md px-3 py-2">
        <h2 class="text-2xl font-bold text-primary text-center">{{team.name}}</h2>
        <p class="text-sm text-gray-400 mt-2">{{team.description}}</p>
      </div>
      <ul class="bg-white shadow-md mt-4">
        <template v-for="member in team.members" :key="member.id">
          <li class="border-b-2 border-gray-400 last:border-b-0 hover:bg-gray-300">
            <NuxtLink 
            :to="`/teams/${$route.params.id}/member/${member.id}`"
            class="flex flex-wrap items-center inline-block w-full py-2"
            activeClass="text-white bg-gray-500 font-bold"
            >
            <img :src="`/images/${member.image}`" :alt="`image of ${member.name}`"
            class="w-12 h-12 mx-4 p-2 bg-white rounded-full"
            >
            {{
              member.name
            }}</NuxtLink>
          </li>
        </template>
      </ul>
      <NuxtLink to="/teams"
      class="bg-secondary w-full inline-block py-2 shadow-md uppercase text-center mt-8"
      >Back</NuxtLink>
    </div>
    <div class="w-8/12">
      <div v-if="!hasChild"
      class="text-center mt-16 bg-gray-100 p-16 border-dotted border-gray-400 border-2"
      >
       Select a player
      </div>
      <NuxtPage></NuxtPage>
    </div>
  </div>
  <div v-if="error" class="text-center">
      {{error}}
      <div>
        <NuxtLink to="/">go to home</NuxtLink>
      </div>
  </div>
</template>

<style scoped></style>
