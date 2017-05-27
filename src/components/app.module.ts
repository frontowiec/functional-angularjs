/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material/angular-material.scss';
import * as ngMaterial from 'angular-material';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

import {AppComponent} from './app.component';
import rootReducer from '../reducers/index';
import {TodosModule} from './todos/todos.module';
import {dispatchHistoryActionsMiddleware} from "../middlewares/dispatch-history-actions.middleware";

export module AppModule {
    export const name: string = 'app';

    angular.module(AppModule.name, [ngMaterial, ngRedux, TodosModule.name])
        .config(($ngReduxProvider) => {
            let storeEnhancers: Function[] = [];
            debugConfig(storeEnhancers); // todo: remove in production
            $ngReduxProvider.createStoreWith(rootReducer, [thunk, 'dispatchHistoryActionsMiddleware'], storeEnhancers);
        })
        .run(($ngRedux, $rootScope, $timeout) => {
            debugRun($ngRedux, $rootScope, $timeout); // todo: remove in production
        })
        .component('app', AppComponent)
        .factory('dispatchHistoryActionsMiddleware', dispatchHistoryActionsMiddleware);

    function debugConfig(storeEnhancers: Function[]) {
        const reduxDevToolsExt = window['__REDUX_DEVTOOLS_EXTENSION__'];
        if (reduxDevToolsExt) {
            storeEnhancers.push(reduxDevToolsExt());
        }
    }

    function debugRun($ngRedux, $rootScope, $timeout) { // model doesn't change
        $ngRedux.subscribe(() => {
            $timeout(() => {
                $rootScope.$apply();
            }, 100);
        });
    }
}