"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by marcin on 27.05.17.
 */
var history_action_1 = require("../actions/history.action");
function collectActionsMiddleware($http) {
    return function (store) { return function (next) { return function (action) {
        if (action.collect === true) {
            var addActionToHistoryAction = history_action_1.default.addActionToHistory(action);
            next(addActionToHistoryAction);
        }
        return next(action);
    }; }; };
}
exports.collectActionsMiddleware = collectActionsMiddleware;
//# sourceMappingURL=collect-actions.middleware.js.map