"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var visibilityFiltersReducer = function (state, action) {
    if (state === void 0) { state = 'SHOW_ALL'; }
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.payload.filter;
        default:
            return state;
    }
};
exports.default = visibilityFiltersReducer;
//# sourceMappingURL=visibility-filter.reducer.js.map