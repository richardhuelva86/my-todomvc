import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoActions from '../data/TodoActions';
import TodoActionTypes from '../data/TodoActionTypes';
import TodoDispatcher from '../data/TodoDispatcher';


function getStores() {
  return [
    TodoStore,
    TodoDraftStore
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    draft: TodoDraftStore.getState(),
    
    onAdd: TodoActions.addTodo,
    onDeleteTodo: TodoActions.deleteTodo,
    onToggleTodo: TodoActions.toggleTodo,
    onUpdateDraft:  TodoActions.updateDraft,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
    onToggleAllTodos: TodoActions.toggleAllTodos
  };
}

export default Container.createFunctional(AppView, getStores, getState);