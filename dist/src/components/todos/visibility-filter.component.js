"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var visibility_filters_actions_1 = require("../../actions/visibility-filters.actions");
var VisibilityFilterController = (function () {
    function VisibilityFilterController($ngRedux) {
        this.$ngRedux = $ngRedux;
        this.unsubscribe = $ngRedux.connect(function (state) {
            var todos = state.todos, visibilityFilters = state.visibilityFilters;
            return { todos: todos, visibilityFilters: visibilityFilters };
        }, visibility_filters_actions_1.default)(this);
    }
    return VisibilityFilterController;
}());
VisibilityFilterController.$inject = ['$ngRedux'];
exports.VisibilityFilterController = VisibilityFilterController;
exports.VisibilityFilterComponent = {
    template: require('./visibility-filter.component.html'),
    controller: VisibilityFilterController
};
//# sourceMappingURL=visibility-filter.component.js.map