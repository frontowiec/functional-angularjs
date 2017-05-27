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
        case todos_constants_1.UPDATE_HISTORY_ACTIONS_LIST: {
            var firstNotAppliedActionIndex_1 = action.payload.applyingActions.length;
            return actions.map(function (historyAction) {
                if (actions.indexOf(historyAction) >= firstNotAppliedActionIndex_1) {
                    historyAction.applied = false;
                    return historyAction;
                }
                historyAction.applied = true;
                return historyAction;
            });
        }
        case todos_constants_1.ADD_ACTION_TO_HISTORY: {
            return state.concat([action.payload.action]);
        }
        default:
            return state;
    }
}
exports.historyReducer = historyReducer;
//# sourceMappingURL=history.reducer.js.map