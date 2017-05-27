/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ITodo} from '../components/todos/todos.model';
import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO, TOGGLE_TODO} from '../constants/todos.constants';

function addTodo(todo: ITodo) {
    return {
        type: ADD_TODO,
        payload: {
            todo
        },
        collect: true
    }
}

function removeTodo(id: number) {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        },
        collect: true
    }
}

function toggleTodo(todo: ITodo) {
    return {
        type: TOGGLE_TODO,
        payload: {
            todo
        },
        collect: true
    }
}

function clearTodos() {
    return {
        type: CLEAR_TODOS
    }
}

export default {addTodo, removeTodo, toggleTodo, clearTodos};
