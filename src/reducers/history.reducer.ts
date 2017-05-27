/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ADD_ACTION_TO_HISTORY, LOAD_ACTIONS, UPDATE_HISTORY_ACTIONS_LIST} from "../constants/todos.constants";

export function historyReducer(state = [], action) {
    switch (action.type) {
        case LOAD_ACTIONS:
            return action.payload.actions;
        case UPDATE_HISTORY_ACTIONS_LIST: {
            const firstNotAppliedActionIndex = action.payload.applyingActions.length;
            return state.map(historyAction => {
                if (state.indexOf(historyAction) >= firstNotAppliedActionIndex) {
                    historyAction.applied = false;
                    return historyAction;
                }
                historyAction.applied = true;
                return historyAction;
            });
        }
        case ADD_ACTION_TO_HISTORY:
            return [...state, action.payload.action];
        default:
            return state;
    }
}