import AsyncStorage from "@react-native-async-storage/async-storage";
const initState = {
    user: {},
    isLoggedIn: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case "AUTHENTICATION":
            AsyncStorage.setItem("user", JSON.stringify(action.payload));
            return { ...state, user: action.payload, isLoggedIn: true };   
        case "LOGOUT":
            AsyncStorage.removeItem("user");
            return initState
        default:
            return state;
     }
} 