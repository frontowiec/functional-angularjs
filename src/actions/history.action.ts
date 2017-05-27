/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {
    ADD_ACTION_TO_HISTORY,
    APPLY_ACTION, FETCH_ACTIONS, LOAD_ACTIONS,
    UPDATE_HISTORY_ACTIONS_LIST
} from '../constants/todos.constants';

function loadActions(actions) {
    return {
        type: LOAD_ACTIONS,
        payload: {
            actions
        }
    }
}

function fetchActions() {
    return {
        type: FETCH_ACTIONS
    }
}

function applyAction(action) {
    return {
        type: APPLY_ACTION,
        payload: {
            action
        }
    }
}

function updateHistoryActionsList(applyingActions) {
    return {
        type: UPDATE_HISTORY_ACTIONS_LIST,
        payload: {
            applyingActions
        }
    }
}

function addActionToHistory(action) {
    return {
        type: ADD_ACTION_TO_HISTORY,
        payload: {
            action
        }
    }
}

export default {loadActions, applyAction, updateHistoryActionsList, fetchActions, addActionToHistory};
