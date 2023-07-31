import {infoTeams} from '../lib/data'

export default defineEventHandler((event)=>{
    const _data = infoTeams()
    let data = _data[0] || {}
    const params = getQuery(event)
    if(params?.id){
        data = _data.find(item => item.id === params.id)
    }
    if(params?.id && params?.member){
        let newData = data?.members.find(item => item.id === params.member)
        data = newData
    }
    if(data === undefined){
        const message = params?.member?"No member found in ":"No team found in "
        throw createError({
            statusCode:404,
            statusMessage:message
        })
    }
    return data
})

