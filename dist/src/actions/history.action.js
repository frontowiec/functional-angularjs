"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var todos_constants_1 = require("../constants/todos.constants");
function loadActions(actions) {
    return {
        type: todos_constants_1.LOAD_ACTIONS,
        payload: {
            actions: actions
        }
    };
}
function fetchActions() {
    return {
        type: todos_constants_1.FETCH_ACTIONS
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
            action: action
        }
    };
}
exports.default = { loadActions: loadActions, applyAction: applyAction, updateHistoryActionsList: updateHistoryActionsList, fetchActions: fetchActions, addActionToHistory: addActionToHistory };
//# sourceMappingURL=history.action.js.map