import {
    ADD_TODOS,
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
    PUSH_NEW_TODO,
    UPDATE_TODO
} from "../actionTypes/actionTypesIndex";


const initialState = {
    todos: [],
    isLoading: false
}


export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS: {
            return {
                ...state, todos: action.payload
            }
        }
        case SET_LOADING_TRUE: {
            return {
                ...state, isLoading: true
            }
        }
        case SET_LOADING_FALSE: {
            return {
                ...state, isLoading: false
            }
        }
        case PUSH_NEW_TODO: {
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        }
        case UPDATE_TODO: {
            let find = state.todos.find(todo => todo.id === action.payload.id);
            console.log(find);
            find.completed=action.payload.completed
            return {
                ...state
            }
        }

        default:
            return state
    }
}