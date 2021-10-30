import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage  : profileReducer,
    messagesPage : dialogsReducer,
    friendsPage  : friendsReducer
})

let store = createStore(reducers); //Создали store редакса

export default store;