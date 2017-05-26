"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var todos_reducer_1 = require("./todos.reducer");
var todos_action_1 = require("../actions/todos.action");
var initialState = [
    {
        id: 0,
        completed: false,
        name: 'Learn to',
        description: 'react, redux'
    },
    {
        id: 1,
        completed: true,
        name: 'Install nodejs',
        description: 'on docker image'
    },
    {
        id: 2,
        completed: false,
        name: 'Call to Paul'
    }
];
test('should return initial state', function () {
    expect(todos_reducer_1.todosReducer(undefined, {})).toEqual(initialState);
});
test('should return state with new todo element', function () {
    var newTodo = {
        id: 2,
        name: 'New todo',
        completed: false
    };
    var addTodoAction = todos_action_1.default.addTodo(newTodo);
    var expectedState = initialState.concat([newTodo]);
    expect(todos_reducer_1.todosReducer(undefined, addTodoAction)).toEqual(expectedState);
});
test('should remove todo', function () {
    var removeTodoAction = todos_action_1.default.removeTodo(0);
    var expectedState = initialState.filter(function (todo) { return todo.id !== 0; });
    expect(todos_reducer_1.todosReducer(undefined, removeTodoAction)).toEqual(expectedState);
});
test('should toggle todo', function () {
    var toggleTodoAction = todos_action_1.default.toggleTodo(initialState[1]);
    var expectedState = initialState.map(function (todo) {
        if (todo.id === 1) {
            todo.completed = false;
        }
        return todo;
    });
    expect(todos_reducer_1.todosReducer(undefined, toggleTodoAction)).toEqual(expectedState);
});
//# sourceMappingURL=todos.reducer.spec.js.map