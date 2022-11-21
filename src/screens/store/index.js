import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer"
import GasReducers from "./GasReducers";
import WaterReducers from "./WaterReducers";
export default combineReducers({
    user: AuthReducer,
    gas: GasReducers,
    water :WaterReducers,
})