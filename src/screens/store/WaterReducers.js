const initState ={
    water:[]
}

export default ((state = initState,action)=>{
    switch (action.type) {
        case "FETCHwATER":
            return{...state, water : action.payload}
        default:
            return state;
    }
})