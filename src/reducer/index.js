import {combineReducers} from "redux";
import bdMusicReducer from "./bdmusic"
const bdMusic = combineReducers({
    playArr:bdMusicReducer
})


export default bdMusic;