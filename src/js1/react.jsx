import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// 容器组件
import App from './containers/App';
// stores状态
import configureStore from './stores/configureStore';
const store=configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,document.querySelector('#app'));

