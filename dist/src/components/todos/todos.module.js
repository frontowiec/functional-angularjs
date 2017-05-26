"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var angular = require("angular");
require("angular-local-storage");
var todos_component_1 = require("./todos.component");
var visibility_filter_component_1 = require("./visibility-filter.component");
var todo_mock_module_1 = require("./todo.mock.module");
var TodosModule;
(function (TodosModule) {
    TodosModule.name = 'app.todos';
    angular.module(TodosModule.name, ['LocalStorageModule', todo_mock_module_1.TodoMockModule.name])
        .component('todos', todos_component_1.TodosCompoenent)
        .component('visibilityFilter', visibility_filter_component_1.VisibilityFilterComponent);
})(TodosModule = exports.TodosModule || (exports.TodosModule = {}));
//# sourceMappingURL=todos.module.js.map