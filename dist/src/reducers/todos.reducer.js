"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var todos_constants_1 = require("../constants/todos.constants");
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
var todoReducer = function (state, action) {
    switch (action.type) {
        case todos_constants_1.ADD_TODO:
            return action.payload.todo;
        case todos_constants_1.TOGGLE_TODO:
            if (state.id !== action.payload.todo.id) {
                return state;
            }
            return __assign({}, state, { completed: !state.completed });
        default:
            return state;
    }
};
function todosReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case todos_constants_1.ADD_TODO: {
            return state.concat([todoReducer(undefined, action)]);
        }
        case todos_constants_1.REMOVE_TODO: {
            return state.slice(0, action.payload.id).concat(state.slice(action.payload.id + 1));
        }
        case todos_constants_1.TOGGLE_TODO: {
            return state.map(function (t) { return todoReducer(t, action); });
        }
        default:
            return state;
    }
}
exports.todosReducer = todosReducer;
//# sourceMappingURL=todos.reducer.js.map