<script setup>

const props = defineProps({
    stats:{
      type:Array,
      default:()=>([10,10,10,10])
    },
    name:{
      type:String,
      default:"Name of figther"
    }
})

const series = computed(()=>{
  return [{
    name:`stats of ${props.name}`,
    data:props.stats
  }]
})

const options = {
  chart: {
    id: "bar-chart",
  },
  xaxis: {
    categories: ["Hp", "Attack", "Defense", "Speed"],
  },
};

</script>

<template>
  <client-only>
    <apexchart width="500" type="radar" :options="options" :series="series"></apexchart>
  </client-only>
</template>
