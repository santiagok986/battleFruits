<script setup>

const layout = ref("default")

function changeLayout(){
   if(layout.value === "default"){
      layout.value = "custom"
   }else{
      layout.value = "default"
   }
}

</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
    <button @click="changeLayout" class="fixed top-0 left-0 text-white text-xs">
      {{layout === "default"?"Left menu":"Top menu"}}
    </button>
  </NuxtLayout>
</template>
