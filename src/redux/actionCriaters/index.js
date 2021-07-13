import {SET_LOADING_TRUE, SET_LOADING_FALSE, PUSH_NEW_TODO, ADD_TODOS,UPDATE_TODO} from "../actionTypes";

export const setLoadingTrue = () => ({type: 'SET_LOADING_TRUE'});
export const setLoadingFalse = () => ({type: 'SET_LOADING_FALSE'});
export const appTodos = (payload) => ({type: 'ADD_TODOS', payload});
export const pushNewTodo = (payload) => ({type: 'PUSH_NEW_TODO', payload});
export const updTodo = () => ({type: 'UPDATE_TODO'});