"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var todos_constants_1 = require("../constants/todos.constants");
function loadActions() {
    return {
        type: todos_constants_1.LOAD_ACTIONS
    };
}
exports.default = { loadActions: loadActions };
//# sourceMappingURL=history.action.js.map