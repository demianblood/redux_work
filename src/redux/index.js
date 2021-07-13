import {createStore} from "redux";
import {roatReducer} from "./reducers";

export const store= createStore(roatReducer)