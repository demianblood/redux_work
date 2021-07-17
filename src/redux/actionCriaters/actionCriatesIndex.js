import {
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
    PUSH_NEW_TODO,
    ADD_TODOS,
    UPDATE_TODO,
    DELETE_TODO,

} from "../actionTypes/actionTypesIndex";

export const setLoadingTrue = () => ({type: 'SET_LOADING_TRUE'});
export const setLoadingFalse = () => ({type: 'SET_LOADING_FALSE'});
export const appTodos = (payload) => ({type: 'ADD_TODOS', payload});
export const pushNewTodo = () => ({type: 'PUSH_NEW_TODO'});
export const updTodo = (payload) => ({type: 'UPDATE_TODO', payload});
// export const delTodo = (payload) => ({type: "DELETE_TODO", payload})
