"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var todos_action_1 = require("../../actions/todos.action");
var history_action_1 = require("../../actions/history.action");
var TodosController = (function () {
    function TodosController($ngRedux, $mdDialog, $mdSidenav) {
        var _this = this;
        this.$ngRedux = $ngRedux;
        this.$mdDialog = $mdDialog;
        this.$mdSidenav = $mdSidenav;
        this.toolbarVisibility = false;
        this.unsubscribe = $ngRedux.connect(function (state) {
            var todos = state.todos, visibilityFilters = state.visibilityFilters, history = state.history;
            var filteredTodos = _this.getVisibleTodos(todos, visibilityFilters);
            return { todos: filteredTodos, visibilityFilters: visibilityFilters, history: history };
        }, __assign({}, todos_action_1.default, history_action_1.default))(this);
    }
    TodosController.prototype.$onInit = function () {
        this.fetchActions();
    };
    TodosController.prototype.$onDestroy = function () {
        this.unsubscribe();
    };
    TodosController.prototype.showPrompt = function (ev) {
        var _this = this;
        var confirm = this.$mdDialog.prompt()
            .title('Add new todo')
            .textContent('Describe new todo')
            .placeholder('What you need todo?')
            .ariaLabel('todo')
            .targetEvent(ev)
            .ok('Save!')
            .cancel('Cancel');
        this.$mdDialog.show(confirm).then(function (result) {
            var id = _this.todos.length - 1;
            _this.addTodo({ name: result, completed: false, id: id });
        }, function () {
            //remove error: Possibly unhandled rejection: undefined
        });
    };
    TodosController.prototype.toggleFiltersVisibility = function () {
        this.toolbarVisibility = !this.toolbarVisibility;
    };
    TodosController.prototype.getVisibleTodos = function (todos, filter) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_ACTIVE':
                return todos.filter(function (t) { return !t.completed; });
            case 'SHOW_COMPLETED':
                return todos.filter(function (t) { return t.completed; });
        }
    };
    TodosController.prototype.toggleSidenav = function (id) {
        this.$mdSidenav(id).toggle();
    };
    return TodosController;
}());
TodosController.$inject = ['$ngRedux', '$mdDialog', '$mdSidenav'];
exports.TodosController = TodosController;
exports.TodosCompoenent = {
    template: require('./todos.component.html'),
    controller: TodosController
};
//# sourceMappingURL=todos.component.js.map