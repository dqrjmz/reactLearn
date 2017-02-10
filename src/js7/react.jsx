import React,{component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {todoApp} from './reducers/second';
import {addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters} from './actions/second';

// 创建一个store
const store = createStore(todoApp);

// getState()可以获取到整个应用的状态
console.log(store.getState());

// 给store注册一个监听器 ,state有变化后触发 
// 并返回一个注销监听器的函数
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})

// 使用action生成器生成action,store调用dispatch方法触发reducer方法返回新state
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));


/** 
 * 创建函数式无状态组件【纯函数】
 */





