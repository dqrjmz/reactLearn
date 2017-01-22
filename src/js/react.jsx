import React from 'react';
import ReactDOM from 'react-dom';


import { HeaderComponent } from './workComponent/HeaderComponent.jsx';



// 样式模块
import '../css/index.css'

var App = React.createClass({
    render: function () {
        return (
           <HeaderComponent  />
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#app'));