/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {ADD_ACTION_TO_HISTORY, LOAD_ACTIONS, UPDATE_HISTORY_ACTIONS_LIST} from "../constants/todos.constants";
import {TodoMockModule} from "../components/todos/todo.mock.module";
import actions = TodoMockModule.actions;

export function historyReducer(state = [], action) {
    switch (action.type) {
        case LOAD_ACTIONS:
            return actions;
        case UPDATE_HISTORY_ACTIONS_LIST: {
            const firstNotAppliedActionIndex = action.payload.applyingActions.length;
            return actions.map(historyAction => {
                if (actions.indexOf(historyAction) >= firstNotAppliedActionIndex) {
                    historyAction.applied = false;
                    return historyAction;
                }
                historyAction.applied = true;
                return historyAction;
            });
        }
        case ADD_ACTION_TO_HISTORY: {
            return [...state, action.payload.action]
        }
        default:
            return state;
    }
}