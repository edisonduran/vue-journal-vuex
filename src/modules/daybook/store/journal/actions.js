import journalApi from "@/api/journalAPI"


export const loadEntries = async ({ commit }) => {

    const response = await journalApi.get('/entries.json')
    const { data } = response

    if( !data ) {

        commit('setEntries', [])
        return
    }


    //console.log( data )
    const entries = []
    for( let id of Object.keys( data ) ){
        
        entries.push({
            id,
            ...data[ id ]
        })
    }

    commit( 'setEntries', entries )    
}


export const updateEntry = async ({ commit }, entry) =>{ 

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    await journalApi.put( `/entries/${entry.id}.json`, dataToSave )
    commit('updateEntry', { ...entry })
    
}

export const createEntry = async ({ commit }, entry) => {

    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    const { data } = await journalApi.post( '/entries.json', dataToSave )
    entry.id = data.name
    commit('addEntry', { ...entry })
    return data.name
}


export const deleteEntry = async ( { commit }, id ) => {

    await journalApi.delete( `/entries/${id}.json` )    
    commit('deleteEntry', id )
    return id
}