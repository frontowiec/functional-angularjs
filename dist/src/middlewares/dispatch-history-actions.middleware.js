"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by marcin on 27.05.17.
 */
var todo_mock_module_1 = require("../components/todos/todo.mock.module");
var actions = todo_mock_module_1.TodoMockModule.actions;
var todos_constants_1 = require("../constants/todos.constants");
var todos_action_1 = require("../actions/todos.action");
var history_action_1 = require("../actions/history.action");
function dispatchHistoryActionsMiddleware() {
    return function (store) { return function (next) { return function (action) {
        if (action.type === todos_constants_1.APPLY_ACTION) {
            var historyAction = action.payload.action;
            var actionsToApply = actionToApply(historyAction);
            var clearTodosAction = todos_action_1.default.clearTodos();
            var updateHistoryActionsListAction = history_action_1.default.updateHistoryActionsList(actionsToApply);
            next(clearTodosAction);
            actionsToApply.forEach(function (hAction) { return next(hAction); });
            next(updateHistoryActionsListAction);
        }
        return next(action);
    }; }; };
}
exports.dispatchHistoryActionsMiddleware = dispatchHistoryActionsMiddleware;
var actionToApply = function (historyAction) {
    var index = actions.indexOf(historyAction);
    return actions.slice(0, (index + 1));
};
//# sourceMappingURL=dispatch-history-actions.middleware.js.map