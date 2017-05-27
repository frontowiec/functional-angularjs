/**
 * Created by marcin on 27.05.17.
 */
import HistoryActions from "../actions/history.action";

export function collectActionsMiddleware($http: angular.IHttpService) {
    return store => next => action => {
        if (action.collect === true) {
            const addActionToHistoryAction = HistoryActions.addActionToHistory(action);
            next(addActionToHistoryAction);
        }
        return next(action);
    }
}
