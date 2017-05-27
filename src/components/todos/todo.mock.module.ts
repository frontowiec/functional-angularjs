/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import 'angular-mocks';
import * as faker from 'faker';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../../constants/todos.constants";

export module TodoMockModule {
    export const name: string = 'app.todo.mock';

    function saveInitDataToLocalStorage() {
        const actions = [
            {
                type: ADD_TODO,
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
                type: ADD_TODO,
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
                type: TOGGLE_TODO,
                payload: {
                    todo: {
                        name: 'Task#2',
                        completed: true, // todo: lel
                        id: 1
                    }
                },
                version: '0.1',
                createDate: new Date('2017-05-26T12:21:00'),
                description: 'Change Task#2 status to complete',
                applied: true
            },
            {
                type: REMOVE_TODO,
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
        .run(($httpBackend: angular.IHttpBackendService) => {


            $httpBackend.when('POST', /.*\/todos\/actions\/$/)
                .respond((method, url, data: string) => {
                    const action = JSON.parse(data);
                    const actions = JSON.parse(localStorage.getItem('actions'));
                    actions.push(action);
                    localStorage.setItem('actions', JSON.stringify(actions));
                    return [200];
                });

            $httpBackend.when('GET', /.*\/todos\/actions\/$/)
                .respond(() => [200, localStorage.getItem('actions')]);

            $httpBackend.when('GET', /.*/).passThrough();
            $httpBackend.when('POST', /.*/).passThrough();
            $httpBackend.when('PUT', /.*/).passThrough();
            $httpBackend.when('DELETE', /.*/).passThrough();
            $httpBackend.when('JSONP', /.*/).passThrough();
        });
}