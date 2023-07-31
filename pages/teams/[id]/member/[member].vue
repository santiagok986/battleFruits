<script setup> 
   const route = useRoute()
   const {data, pending, error} = await useFetch("/api/team", {params:{id:route.params.id, member:route.params.member}})
   const numberStats = computed(()=>{
    if(data.value?.stats){
      return Object.values(data.value.stats)
    }
    return []
   })
</script>

<template>
<div v-if="pending">
    <div class="flex justify-center mt-48 text-secondary"><ui-spinner></ui-spinner></div>
  </div>
  <div v-if="data" class="bg-white shadow-md px-6 py-8">
     <h2 class="text-3xl font-bold text-primary">{{data.name}}</h2>
     <div class="my-2 p-4">
        <h3 class="text-xs text-gray-500 font-semibold">Description</h3>
        <div v-text="data.description"></div>
     </div>
     <div class="flex">
      <div>
        <img :src="`/images/${data.image}`" :alt="`Photo ${data.name}`" class="w-64 h-64">
      </div>
      <div>
        <charts-radar :stats="numberStats" :name="data.name"></charts-radar>
      </div>
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