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
function loadActions() {
    return {
        type: todos_constants_1.LOAD_ACTIONS
    };
}
function applyAction(action) {
    return {
        type: todos_constants_1.APPLY_ACTION,
        payload: {
            action: action
        }
    };
}
function updateHistoryActionsList(applyingActions) {
    return {
        type: todos_constants_1.UPDATE_HISTORY_ACTIONS_LIST,
        payload: {
            applyingActions: applyingActions
        }
    };
}
function addActionToHistory(action) {
    return {
        type: todos_constants_1.ADD_ACTION_TO_HISTORY,
        payload: {
            action: __assign({}, action, { createDate: new Date(), version: '0.1', applied: true })
        }
    };
}
exports.default = { loadActions: loadActions, applyAction: applyAction, updateHistoryActionsList: updateHistoryActionsList, addActionToHistory: addActionToHistory };
//# sourceMappingURL=history.action.js.map