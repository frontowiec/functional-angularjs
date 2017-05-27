/**
 * Created by marcin on 27.05.17.
 */
import {FETCH_ACTIONS} from "../constants/todos.constants";
import HistoryActions from "../actions/history.action";

export function loadActionsMiddleware($http: angular.IHttpService) {
    return store => next => action => {
        if (action.type === FETCH_ACTIONS) {
            $http.get('/todos/actions/')
                .then((data) => {
                    next(HistoryActions.loadActions(data.data));
                });
        }
        return next(action);
    }
}