"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var angular = require("angular");
require("angular-animate");
require("angular-aria");
require("angular-material/angular-material.scss");
var ngMaterial = require("angular-material");
var ng_redux_1 = require("ng-redux");
var app_component_1 = require("./app.component");
var index_1 = require("../reducers/index");
var todos_module_1 = require("./todos/todos.module");
var AppModule;
(function (AppModule) {
    AppModule.name = 'app';
    angular.module(AppModule.name, [ngMaterial, ng_redux_1.default, todos_module_1.TodosModule.name])
        .config(function ($ngReduxProvider) {
        var storeEnhancers = [];
        debugConfig(storeEnhancers); // todo: remove in production
        $ngReduxProvider.createStoreWith(index_1.default, [], storeEnhancers);
    })
        .run(function ($ngRedux, $rootScope, $timeout) {
        debugRun($ngRedux, $rootScope, $timeout); // todo: remove in production
    })
        .component('app', app_component_1.AppComponent);
    function debugConfig(storeEnhancers) {
        var reduxDevToolsExt = window['__REDUX_DEVTOOLS_EXTENSION__'];
        if (reduxDevToolsExt) {
            storeEnhancers.push(reduxDevToolsExt());
        }
    }
    function debugRun($ngRedux, $rootScope, $timeout) {
        $ngRedux.subscribe(function () {
            $timeout(function () {
                $rootScope.$apply();
            }, 100);
        });
    }
})(AppModule = exports.AppModule || (exports.AppModule = {}));
//# sourceMappingURL=app.module.js.map