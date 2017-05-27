"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var angular = require("angular");
require("angular-mocks");
var todos_constants_1 = require("../../constants/todos.constants");
var TodoMockModule;
(function (TodoMockModule) {
    TodoMockModule.name = 'app.todo.mock';
    function saveInitDataToLocalStorage() {
        var actions = [
            {
                type: todos_constants_1.ADD_TODO,
                payload: {
                    todo: {
                        name: 'Task#1',
                        completed: false,
                        id: 0
                    }
                },
                version: '0.1',
                createDate: new Date('2017-05-26T12:00:00'),
                description: 'Add Task#1 to todo list',
                applied: true
            },
            {
                type: todos_constants_1.ADD_TODO,
                payload: {
                    todo: {
                        name: 'Task#2',
                        completed: false,
                        id: 1
                    }
                },
                version: '0.1',
                createDate: new Date('2017-05-26T12:20:00'),
                description: 'Add Task#2 to todo list',
                applied: true
            },
            {
                type: todos_constants_1.TOGGLE_TODO,
                payload: {
                    todo: {
                        name: 'Task#2',
                        completed: true,
                        id: 1
                    }
                },
                version: '0.1',
                createDate: new Date('2017-05-26T12:21:00'),
                description: 'Change Task#2 status to complete',
                applied: true
            },
            {
                type: todos_constants_1.REMOVE_TODO,
                payload: {
                    id: 0
                },
                version: '0.1',
                createDate: new Date('2017-05-26T13:01:00'),
                description: 'Remove Task#1 from todo list',
                applied: true
            }
        ];
        if (!localStorage.getItem('actions')) {
            localStorage.setItem('actions', JSON.stringify(actions));
        }
    }
    saveInitDataToLocalStorage();
    angular.module(TodoMockModule.name, ['ngMockE2E'])
        .run(function ($httpBackend) {
        $httpBackend.when('POST', /.*\/todos\/actions\/$/)
            .respond(function (method, url, data) {
            var action = JSON.parse(data);
            var actions = JSON.parse(localStorage.getItem('actions'));
            actions.push(action);
            localStorage.setItem('actions', JSON.stringify(actions));
            return [200];
        });
        $httpBackend.when('GET', /.*\/todos\/actions\/$/)
            .respond(function () { return [200, localStorage.getItem('actions')]; });
        $httpBackend.when('GET', /.*/).passThrough();
        $httpBackend.when('POST', /.*/).passThrough();
        $httpBackend.when('PUT', /.*/).passThrough();
        $httpBackend.when('DELETE', /.*/).passThrough();
        $httpBackend.when('JSONP', /.*/).passThrough();
    });
})(TodoMockModule = exports.TodoMockModule || (exports.TodoMockModule = {}));
//# sourceMappingURL=todo.mock.module.js.map