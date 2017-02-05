// 这里写的是 容器组件；
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// 展示组件
import Counter from './components/Counter';

//reducers 
import counter from './reducers';

const store = createStore(counter);
const rootEl=document.querySelector('#app');

const render=()=>ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={()=>{store.dispatch({type:'INCREMENT'})}}
        onDecrement={()=>{store.dispatch({type:'DECREMENT'})}}
     />
    ,rootEl
);

//订阅事件
store.subscribe(render);

