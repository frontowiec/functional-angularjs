/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {INgRedux} from 'ng-redux';
import TodosActions from '../../actions/todos.action';
import HistoryActions from '../../actions/history.action';
import {ITodo} from "./todos.model";

export class TodosController implements angular.IController {
    static $inject = ['$ngRedux', '$mdDialog', '$mdSidenav'];

    unsubscribe: Function;

    addTodo: Function;// from actions
    loadActions: Function; // from actions
    toolbarVisibility: boolean = false;
    todos: ITodo[];

    constructor(private $ngRedux: INgRedux, private $mdDialog: angular.material.IDialogService, private $mdSidenav: angular.material.ISidenavService) {
        this.unsubscribe = $ngRedux.connect((state) => {
            const {todos, visibilityFilters, history} = state;
            const filteredTodos = this.getVisibleTodos(todos, visibilityFilters);
            return {todos: filteredTodos, visibilityFilters, history};
        }, {...TodosActions, ...HistoryActions})(this);
    }

    $onInit() {
        this.loadActions();
    }

    $onDestroy() {
        this.unsubscribe();
    }

    showPrompt(ev) {
        const confirm = this.$mdDialog.prompt()
            .title('Add new todo')
            .textContent('Describe new todo')
            .placeholder('What you need todo?')
            .ariaLabel('todo')
            .targetEvent(ev)
            .ok('Save!')
            .cancel('Cancel');

        this.$mdDialog.show(confirm).then((result) => {
            let id = this.todos.length -1;
            this.addTodo({name: result, completed: false, id});
        }, () => {
            //remove error: Possibly unhandled rejection: undefined
        });
    }

    toggleFiltersVisibility() {
        this.toolbarVisibility = !this.toolbarVisibility;
    }

    getVisibleTodos(todos: ITodo[], filter: string) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
        }
    }

    toggleSidenav(id: string) {
        this.$mdSidenav(id).toggle();
    }
}

export const TodosCompoenent: angular.IComponentOptions = {
    template: require('./todos.component.html'),
    controller: TodosController
};
