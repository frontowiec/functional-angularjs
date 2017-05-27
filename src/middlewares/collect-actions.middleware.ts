/**
 * Created by marcin on 27.05.17.
 */
import HistoryActions from "../actions/history.action";

export function collectActionsMiddleware($http: angular.IHttpService) {
    return store => next => action => {
        if (action.collect === true) {
            const hAction = {
                ...action,
                createDate: new Date(),
                version: '0.1',
                applied: true,
                collect: false
            };

            $http.post('/todos/actions/', hAction)
                .then(() => {
                    next(HistoryActions.addActionToHistory(hAction));
                })
        }
        return next(action);
    }
}
