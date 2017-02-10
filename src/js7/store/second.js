import {createStore} from 'redux';
import {todoApp} from '../reducers/second';
import {addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters} from './actions/second';
const store = createStore(todoApp);

console.log(store.getState());
