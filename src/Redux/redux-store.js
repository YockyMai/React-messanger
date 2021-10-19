import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage  : profileReducer,
    messagesPage : dialogsReducer
})

let store = createStore(reducers); //Создали store редакса

export default store;