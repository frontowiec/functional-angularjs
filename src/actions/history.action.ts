/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {APPLY_ACTION, LOAD_ACTIONS, UPDATE_HISTORY_ACTIONS_LIST} from '../constants/todos.constants';

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

function updateHistoryActionsList (applyingActions) {
    return {
        type: UPDATE_HISTORY_ACTIONS_LIST,
        payload: {
            applyingActions
        }
    }
}

export default {loadActions, applyAction, updateHistoryActionsList};
