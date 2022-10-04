const initState ={
    gas :[]
}

export default ((state = initState, action) => {
    switch (action.type) {
        case "FETCHGAS":
            return{...state, gas : action.payload}
        default:
            return state;
     }
})