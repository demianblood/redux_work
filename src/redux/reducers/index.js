import {combineReducers} from "redux";
import {counterReducer} from "./counterReducer";
import {todosReducer} from "./todosReducer";

export const roatReducer = combineReducers(
    {
        counterReducer,
        todosReducer
    }
)
