/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO, TOGGLE_TODO} from "../constants/todos.constants";
import {ITodo} from "../components/todos/todos.model";

const initialState: ITodo[] = [ // todo: fetch this data
    {
        name: 'Task#2',
        completed: true,
        id: 2
    }
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return action.payload.todo;
        case TOGGLE_TODO:
            if (state.id !== action.payload.todo.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, todoReducer(undefined, action)]
        }
        case REMOVE_TODO: {
            return [
                ...state.slice(0, action.payload.id),
                ...state.slice(action.payload.id + 1)
            ];
        }
        case TOGGLE_TODO: {
            return state.map(t => todoReducer(t, action));
        }
        case CLEAR_TODOS: {
            return [];
        }
        default:
            return state;
    }
}
