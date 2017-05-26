"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos_constants_1 = require("../constants/todos.constants");
function addTodo(todo) {
    return {
        type: todos_constants_1.ADD_TODO,
        payload: {
            todo: todo
        }
    };
}
function removeTodo(id) {
    return {
        type: todos_constants_1.REMOVE_TODO,
        payload: {
            id: id
        }
    };
}
function toggleTodo(todo) {
    return {
        type: todos_constants_1.TOGGLE_TODO,
        payload: {
            todo: todo
        }
    };
}
exports.default = { addTodo: addTodo, removeTodo: removeTodo, toggleTodo: toggleTodo };
//# sourceMappingURL=todos.action.js.map