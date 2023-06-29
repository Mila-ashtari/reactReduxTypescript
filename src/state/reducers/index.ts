import {combineReducers} from 'redux'
import favouritesReducer from "./favouritesReducer";
import picturesReducer from "./picturesReducer";

export default combineReducers({
    pictures:picturesReducer,
    favourite:favouritesReducer
})