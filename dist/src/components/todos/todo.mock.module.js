"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var angular = require("angular");
require("angular-mocks");
var faker = require("faker");
var todos_constants_1 = require("../../constants/todos.constants");
var TodoMockModule;
(function (TodoMockModule) {
    TodoMockModule.name = 'app.todo.mock';
    TodoMockModule.actions = [
        {
            type: todos_constants_1.ADD_TODO,
            payload: {
                todo: {
                    name: 'Task#1',
                    completed: false,
                    id: 2
                }
            },
            version: '0.1',
            createDate: faker.date.past()
        },
        {
            type: todos_constants_1.ADD_TODO,
            payload: {
                todo: {
                    name: 'Task#2',
                    completed: false,
                    id: 2
                }
            },
            version: '0.1',
            createDate: faker.date.past()
        },
        {
            type: todos_constants_1.TOGGLE_TODO,
            payload: {
                todo: {
                    name: 'Task#2',
                    completed: true,
                    id: 2
                }
            },
            version: '0.1',
            createDate: faker.date.past()
        },
        {
            type: todos_constants_1.REMOVE_TODO,
            payload: {
                id: 2
            },
            version: '0.1',
            createDate: faker.date.past()
        }
    ];
    angular.module(TodoMockModule.name, ['ngMockE2E'])
        .run(function ($httpBackend) {
        $httpBackend.when('GET', /.*\/todos\/actions$/)
            .respond(function () { return [200, TodoMockModule.actions]; });
        $httpBackend.when('GET', /.*\/todos$/)
            .respond(function () { return [200, { data: 'list of todos' }]; });
    });
})(TodoMockModule = exports.TodoMockModule || (exports.TodoMockModule = {}));
//# sourceMappingURL=todo.mock.module.js.map