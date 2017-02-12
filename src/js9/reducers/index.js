import {combineReducers} from 'redux';
import todos from './todo';
import visibilityFilter from './visibilituFilter';

// 将reudcer合并返回
export default const todoApp=conbineReducers({
	todos,
	visibilityFilter
});