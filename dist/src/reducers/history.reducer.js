"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var todos_constants_1 = require("../constants/todos.constants");
var todo_mock_module_1 = require("../components/todos/todo.mock.module");
var actions = todo_mock_module_1.TodoMockModule.actions;
function historyReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case todos_constants_1.LOAD_ACTIONS:
            return actions;
        default:
            return state;
    }
}
exports.historyReducer = historyReducer;
//# sourceMappingURL=history.reducer.js.map