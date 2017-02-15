import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {addTodoFn,toggleTodoFn,setVisibilityFn} from './actions';
import stateH from './reducer';

const store=createStore(stateH);
console.log(store);
store.dispatch(addTodoFn('jmz'));

console.log(store);