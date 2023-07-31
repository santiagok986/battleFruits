<script setup>
 
 const props = defineProps({
   id:{
    type:String,
    default:"00"
   },
   name:{
    type:String,
    default:"Name"
   },
   src:{
    type:String,
    default:"Default.svg"
   }
 })

</script>

<template>
  <NuxtLink :to="`/teams/${id}`">
    <div class="bg-white shadow-xl py-4 px-2 text-center font-bold w-80">
      <div class="w-46 h-46 mx-auto"><img :src="`/images/${src}`" :alt="`logo of ${name}`"></div>
      <h3 class="text-gray-700 mt-4 uppercase text-lg">{{name}}</h3>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
