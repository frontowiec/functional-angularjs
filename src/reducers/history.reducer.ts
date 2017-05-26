/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {LOAD_ACTIONS} from "../constants/todos.constants";
import {TodoMockModule} from "../components/todos/todo.mock.module";
import actions = TodoMockModule.actions;

export function historyReducer(state = [], action) {
    switch (action.type) {
        case LOAD_ACTIONS:
            return actions;
        default:
            return state;
    }
}
