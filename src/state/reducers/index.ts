import {combineReducers} from 'redux'
import favouritesReducer from "./favouritesReducer";
import picturesReducer from "./picturesReducer";

const reducers= combineReducers({
    pictures:picturesReducer,
    favourite:favouritesReducer
})

export default reducers