/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {combineReducers} from 'redux';
import {todosReducer} from './todos.reducer';
import visibilityFiltersReducer from './visibility-filter.reducer';
import {historyReducer} from "./history.reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilters: visibilityFiltersReducer,
    history: historyReducer
});

export default rootReducer;