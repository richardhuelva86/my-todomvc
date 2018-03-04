import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';


class TodoEditStore extends ReduceStore{
    constructor(){
        super(TodoDispatcher);
    }

    getInitialState(){
        return '';
    }
    reduce(state, action){
        switch(action.type){
            case TodoActionTypes.START_EDITING_TODO:
                return '';
            case TodoActionTypes.STOP_EDITING_TODO:
                return action.todo;
            default: 
                return state;
        }
        
    }

}
export default new TodoEditStore();