/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {LOAD_ACTIONS} from '../constants/todos.constants';

function loadActions() {
    return {
        type: LOAD_ACTIONS
    }
}

export default {loadActions};
