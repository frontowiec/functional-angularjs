"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var setVisibilityFilter = function (filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
            filter: filter
        }
    };
};
exports.default = { setVisibilityFilter: setVisibilityFilter };
//# sourceMappingURL=visibility-filters.actions.js.map