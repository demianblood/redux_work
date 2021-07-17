import {createStore} from "redux";
import {roatReducer} from "./reducers/roatReducer";

export const storeIndex= createStore(roatReducer)