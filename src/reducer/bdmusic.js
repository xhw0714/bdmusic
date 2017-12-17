
const bdmusic = (state=[],action)=>{
    switch (action.type) {
        case "PLAYMUSIC":
            return [
                {
                    id:action.id,
                },
                ...state.filter(e=>e.id!==action.id)
            ]
        
        default:
            return state;
    }
}

export default bdmusic;