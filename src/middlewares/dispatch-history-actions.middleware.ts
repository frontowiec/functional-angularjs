/**
 * Created by marcin on 27.05.17.
 */
import {APPLY_ACTION} from "../constants/todos.constants";
import TodosActions from '../actions/todos.action';
import HistoryActions from "../actions/history.action";

export function dispatchHistoryActionsMiddleware() {
    return store => next => action => {
        if (action.type === APPLY_ACTION) {
            const actions = store.getState().history;
            const historyAction = action.payload.action;
            const actionsToApply = actionToApply(actions, historyAction);
            const clearTodosAction = TodosActions.clearTodos();
            const updateHistoryActionsListAction = HistoryActions.updateHistoryActionsList(actionsToApply);

            next(clearTodosAction);
            actionsToApply.forEach(hAction => next(hAction));
            next(updateHistoryActionsListAction);
        }
        return next(action);
    }
}

const actionToApply = (actions, historyAction) => {
    const index = actions.indexOf(historyAction);
    return actions.slice(0, (index + 1));
};