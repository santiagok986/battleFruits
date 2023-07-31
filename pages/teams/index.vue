<script setup>
    const {data:teams, pending, error} = await useFetch("/api/teams", {
      transform(data){
        const teams = data.map((team)=>({
          id:team.id,
          name:team.name,
          image:team.image,
        }))
        return teams
      }
    })
</script>

<template>
  <div>
    <div v-if="pending">
      <div class="flex justify-center mt-48 text-secondary"><ui-spinner></ui-spinner></div>
    </div>
    <div v-else-if="teams">
      <div class="flex justify-around">
        <template v-for="team in teams" :key="team.id">
          <card-team :id="team.id" :name="team.name" :src="team.image"></card-team>
        </template>
      </div>
    </div>
    <div v-if="error">
      error!
    </div>
  </div>
</template>

<style scoped></style>
