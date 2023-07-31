<script setup>

 const props = defineProps({
    action:{
      type:String
    },
    comment:{
      type:String
    },
    damage:{
      type:String
    }
 })


</script>

<template>
  <div class="w-6/12 mx-auto p-4 bg-white shadow-md rounded my-2">
    <p v-if="action"><span class="font-bold text-sm text-primary">Action</span> {{action}}</p>
    <p><span class="font-bold text-sm text-primary">Comment</span> {{comment}}</p>
    <p v-if="damage || damage === 0"><span class="font-bold text-sm text-primary">Damage</span> {{damage}}</p>
  </div>
</template>

