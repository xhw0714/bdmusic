
const bdmusic = (state=[],action)=>{
    switch (action.type) {
        case "PLAYMUSIC":
            return [
                {
                    id:action.id
                },
                ...state
            ]
    
        default:
            return state;
    }
}

export default bdmusic;