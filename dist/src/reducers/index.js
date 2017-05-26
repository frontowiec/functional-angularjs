"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var redux_1 = require("redux");
var todos_reducer_1 = require("./todos.reducer");
var visibility_filter_reducer_1 = require("./visibility-filter.reducer");
var history_reducer_1 = require("./history.reducer");
var rootReducer = redux_1.combineReducers({
    todos: todos_reducer_1.todosReducer,
    visibilityFilters: visibility_filter_reducer_1.default,
    history: history_reducer_1.historyReducer
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map