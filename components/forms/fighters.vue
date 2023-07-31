<script setup>

const props = defineProps({
    teams:{
        type:Array,
        default:()=>([])
    }
})

const emit = defineEmits(['@selected-fighter'])

const selectedTeam = ref(null)
const selectedFighter = ref(null)

watch(selectedTeam, ()=>{
    selectedFighter.value = null
    emit('@selected-fighter', selectedFighter.value)
})

const optionsFighters = computed(()=>{
    if(selectedTeam.value){
        return props.teams.find(team => team.id === selectedTeam.value)
    }
    return []
})


function sendFighter() {
    emit('@selected-fighter', selectedFighter.value)
}

const stylesSelect = "block w-64 mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm"

</script>

<template>
    <div>
        
        <select :class="stylesSelect" v-model="selectedTeam">
            <option :value="null">Select team</option>
            <option v-for="team in teams" :key="`team-${team.id}`" :value="team.id">{{team.name}}</option>
        </select>

        <select :class="stylesSelect" :disabled="!selectedTeam" v-model="selectedFighter" @change="sendFighter">
            <option :value="null">Select fighter</option>
            <option v-for="fighter in optionsFighters.members" :key="`fighter-${fighter.id}`" :value="fighter">{{fighter.name}}</option>
        </select>
        
    </div>
</template>