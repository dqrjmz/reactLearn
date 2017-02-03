import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

// 创建store：状态容器时，传入reducers方法;
// 唯一改变state的方法是触发action,描述怎么改变state的对象
// 描述改变state的过程，的reducers
let store=createStore(todoApp);

let rootElement=document.querySelector('#app');

render(
<Provider store={store}>
    <App />
</Provider>,rootElement);