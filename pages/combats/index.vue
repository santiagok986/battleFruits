<script setup>
const { data: teams, pending, error } = await useFetch("/api/teams");

const fighter1 = ref(null);
const fighter2 = ref(null);

const hp1 = ref(null)
const hp2 = ref(null)

//const valueNum = ref(0)
const message = ref(null)

const isBattle = ref(false)
const showReset = ref(false)

// const _fighter1 = computed(() => {
//   if (fighter1.value) { 
//     return JSON.parse(JSON.stringify(fighter1.value));
//   }
//   return null;
// });
// const _fighter2 = computed(() => {
//   if (fighter2.value) {
//     return JSON.parse(JSON.stringify(fighter2.value));
//   }
//   return null;
// });

watch(fighter1, (newVal, old)=>{
  if(newVal){
    hp1.value = newVal.stats.hp
  }else{
    hp1.value = null
  }
  message.value = null
})

watch(fighter2, (newVal, old)=>{
  if(newVal){
    hp2.value = newVal.stats.hp
  }else{
    hp2.value = null
  }
  message.value = null
})

function startFight(){
  if(!fighter1.value || !fighter2.value){
    message.value = "Please select two fighters"
    return
  }
  if(fighter1.value?.id === fighter2.value?.id){
    message.value = "Try two differents fighters"
    return
  }
  battle()
  isBattle.value = true
  ///message.value = "Fight!"
}

const battleLog = ref([])
const roundId = ref(0)

function battle(){
   if(hp1.value > 0 && hp2.value > 0){
    setTimeout(battle, 100);
    round()
    return
   }
   if(hp1.value > 0){
     roundId.value++
     let log = {
          id:roundId.value,
          comment:`${fighter1.value.name} won!!`,
       }
     battleLog.value.unshift(log)
   }
   if(hp2.value > 0){
     roundId.value++
     let log = {
          id:roundId.value,
          comment:`${fighter2.value.name} won!!`,
       }
     battleLog.value.unshift(log)
   }
   showReset.value = true
}



function round(){
    const speed1 = useRandom(fighter1.value.stats.spd)
    const speed2 = useRandom(fighter2.value.stats.spd)
    let damage = 0
    let log = {}
    roundId.value++
    if(speed1 > speed2){
       const hit = useRandom(fighter1.value.stats.atk) - useRandom(fighter2.value.stats.def)
       damage = hit < 0 ? 0 : hit
       hp2.value = hp2.value - damage < 0 ? 0 : hp2.value - damage
       const comment = `${damage?fighter1.value.name:fighter2.value.name} ${useComments(damage)}`
       log = {
          id:roundId.value,
          action:`Attack from ${fighter1.value.name}`,
          comment:comment,
          damage:damage.toString()
       }
    }else if(speed2 > speed1){
      const hit = useRandom(fighter2.value.stats.atk) - useRandom(fighter1.value.stats.def)
       damage = hit < 0 ? 0 : hit
       hp1.value = hp1.value - damage < 0 ? 0 : hp1.value - damage
       const comment = `${damage?fighter2.value.name:fighter1.value.name} ${useComments(damage)}`
       log = {
          id:roundId.value,
          action:`Attack from ${fighter2.value.name}`,
          comment:comment,
          damage:damage.toString()
       }
    }else{
      log = {
          id:roundId.value,
          comment:"whooo a super battle",
       }
    }
    battleLog.value.unshift(log)
}

function resetBattle(){
  isBattle.value = false
  showReset.value = false 
  fighter1.value = null
  fighter2.value = null 
  battleLog.value = []
}





</script>

<template>
  <div v-if="pending">
    <div class="flex justify-center mt-48 text-scondary"><ui-spinner></ui-spinner></div>
  </div>
  <div v-else-if="teams">
    <div class="flex flex-wrap justify-around mx-auto">
      <div>
        <card-fruit
          v-if="fighter1"
          :name="fighter1.name"
          :hp="hp1"
          :fullHp="fighter1.stats.hp"
          :src="`images/${fighter1.image}`"
        >
        </card-fruit>
        <card-fruit name="Fighter 1" v-else></card-fruit>

        <forms-fighters
          :teams="teams"
          @@selected-fighter="fighter1 = $event"
          v-if="!isBattle"
        ></forms-fighters>
      </div>
      <div>
        <button @click="startFight" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700" v-if="!isBattle">Fight</button>
        <button @click="resetBattle" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700" v-if="showReset">Reset</button>
      </div>
      <div>
        <card-fruit
          v-if="fighter2"
          :name="fighter2.name"
          :hp="hp2"
          :fullHp="fighter2.stats.hp"
          :src="`images/${fighter2.image}`"
          fighter2
        >
        </card-fruit>
        <card-fruit name="Fighter 2" v-else></card-fruit>

        <forms-fighters
          :teams="teams"
          @@selected-fighter="fighter2 = $event"
          v-if="!isBattle"
        ></forms-fighters>
      </div>
    </div>
    <template v-for="round in battleLog" :key="round.id">
      <card-log :action="round.action" :comment="round.comment" :damage="round.damage"></card-log>
    </template>
    <div v-if="message" class="p-4 bg-yellow-100 rounded-md border-solid border border-red-800 w-1/2 mx-auto mt-4">
       <p class="font-bold text-center text-red-800">{{message}}</p>
    </div>
  </div>
  <div v-if="error">
    {{ error }}
    <div><NuxtLink to="/">Go to home</NuxtLink></div>
  </div>
</template>

<style scoped></style>
