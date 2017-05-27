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
 * Created by marcin on 27.05.17.
 */
var history_action_1 = require("../actions/history.action");
function collectActionsMiddleware($http) {
    return function (store) { return function (next) { return function (action) {
        if (action.collect === true) {
            var hAction_1 = __assign({}, action, { createDate: new Date(), version: '0.1', applied: true, collect: false });
            $http.post('/todos/actions/', hAction_1)
                .then(function () {
                next(history_action_1.default.addActionToHistory(hAction_1));
            });
        }
        return next(action);
    }; }; };
}
exports.collectActionsMiddleware = collectActionsMiddleware;
//# sourceMappingURL=collect-actions.middleware.js.map