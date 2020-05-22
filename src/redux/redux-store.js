import { createStore, combineReducers } from "redux";
import contentReducer from "./content-reducer";
import messageReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let redusers = combineReducers({
    profilePage: contentReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer
});

let store = createStore(redusers);

window.store = store;

export default store;