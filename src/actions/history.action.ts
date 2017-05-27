/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {
    ADD_ACTION_TO_HISTORY, APPLY_ACTION, LOAD_ACTIONS,
    UPDATE_HISTORY_ACTIONS_LIST
} from '../constants/todos.constants';

function loadActions() {
    return {
        type: LOAD_ACTIONS
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
            action: {
                ...action,
                createDate: new Date(),
                version: '0.1',
                applied: true
            }
        }
    }
}

export default {loadActions, applyAction, updateHistoryActionsList, addActionToHistory};
