import {infoTeams} from '../lib/data'

export default defineEventHandler(()=>{
    const data = infoTeams()
    return data
})

