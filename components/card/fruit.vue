<script setup>
 
 const props = defineProps({
    name:{
      type:String,
      default:"Fruit name"
    },
    hp:{
      type:Number,
      default:50
    },
    fullHp:{
      type:Number,
      default:50
    },
    src:{
      type:String,
      default:'images/Default.svg'
    },
    fighter2:{
      type:Boolean,
      default:false
    }
 })

const bar = ref(null)
const barWidth = ref(null)

onMounted(() => {
  barWidth.value = bar.value.offsetWidth
})

const currentHp = computed(()=>{
    let percentage = (props.hp / props.fullHp) * 100
    return Math.floor((percentage / 100) * barWidth.value)
})

</script>

<template>
    <div class="w-64 rounded-lg bg-white shadow-md p-4">
        <h4 class="text-lg font-bold mb-2 text-center">{{name}}</h4>
        <img :src="`/${src}`" :alt="`Photo of ${name}`" :class="fighter2?'transform -scale-x-100':''">
        <p class="font-bold text-sm text-primary my-2">Hp {{hp}}/{{fullHp}}</p>
        <div class="bg-gray-300 w-full h-4 rounded-lg" ref="bar">
          <div class="bg-green-500 h-full rounded-lg" :style="`width:${currentHp}px;`"></div>
        </div>
    </div>
</template>


