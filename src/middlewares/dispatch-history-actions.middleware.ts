/**
 * Created by marcin on 27.05.17.
 */
import {TodoMockModule} from "../components/todos/todo.mock.module";
import actions = TodoMockModule.actions;
import {APPLY_ACTION} from "../constants/todos.constants";
import TodosActions from '../actions/todos.action';
import HistoryActions from "../actions/history.action";

export function dispatchHistoryActionsMiddleware() {
    return store => next => action => {
        if (action.type === APPLY_ACTION) {
            const historyAction = action.payload.action;
            const actionsToApply = actionToApply(historyAction);
            const clearTodosAction = TodosActions.clearTodos();
            const updateHistoryActionsListAction = HistoryActions.updateHistoryActionsList(actionsToApply);

            next(clearTodosAction);
            actionsToApply.forEach(hAction => next(hAction));
            next(updateHistoryActionsListAction);
        }
        return next(action);
    }
}

const actionToApply = (historyAction) => {
    const index = actions.indexOf(historyAction);
    return actions.slice(0, (index + 1));
};