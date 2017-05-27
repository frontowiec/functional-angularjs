"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by marcin on 27.05.17.
 */
var todos_constants_1 = require("../constants/todos.constants");
var history_action_1 = require("../actions/history.action");
function loadActionsMiddleware($http) {
    return function (store) { return function (next) { return function (action) {
        if (action.type === todos_constants_1.FETCH_ACTIONS) {
            $http.get('/todos/actions/')
                .then(function (data) {
                next(history_action_1.default.loadActions(data.data));
            });
        }
        return next(action);
    }; }; };
}
exports.loadActionsMiddleware = loadActionsMiddleware;
//# sourceMappingURL=load-actions.middleware.js.map