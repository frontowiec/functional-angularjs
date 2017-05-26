"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var redux_mock_store_1 = require("redux-mock-store");
var visibility_filters_actions_1 = require("../actions/visibility-filters.actions");
var mockStore = redux_mock_store_1.default([]);
var initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            name: 'Learn to',
            description: 'react, redux'
        },
        {
            id: 1,
            completed: true,
            name: 'Install nodejs',
            description: 'on docker image'
        },
        {
            id: 2,
            completed: false,
            name: 'Call to Paul'
        }
    ],
    visibilityFilters: "SHOW_ALL"
};
test('should return all todos', function () {
    var store = mockStore(initialState);
    var showAllAction = visibility_filters_actions_1.default.setVisibilityFilter('SHOW_ALL');
    store.dispatch(showAllAction);
    expect(store.getState()).toEqual(initialState);
    var actions = store.getActions();
    expect(actions).toEqual([showAllAction]);
});
test.skip('should return only completed todos', function (done) {
    var showCompletedAction = visibility_filters_actions_1.default.setVisibilityFilter('SHOW_COMPLETED');
    var store = mockStore(initialState, [showCompletedAction], done);
    //expect(store.getState().visibilityFilters).not.toEqual('SHOW_COMPLETED');
    store.dispatch(showCompletedAction);
});
//# sourceMappingURL=visibility-filter.reducer.spec.js.map