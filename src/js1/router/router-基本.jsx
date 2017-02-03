import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';



var HomeComponent=React.createClass({
    render:function(){
        return (
            <div>
                home
                <ul >
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/games">游戏</Link></li>
                </ul>
            </div>
        );
    }
});

var AboutComponent=React.createClass({
    render:function(){
        return (
            <div> 
                about 
                <ul>
                    <li><Link to="/"> 首页</Link></li>
                </ul> 
            </div>
        );
    }
});
var GameComponent=React.createClass({
    render:function(){
        return (
            <div>
                游戏
                <ul>
                    <li><Link to="/">首页</Link></li>
                </ul>
            </div>
        );
    }
});

var App=React.createClass({
    render:function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent}></Route>
                <Route path="/about" component={AboutComponent} ></Route>
                <Route path="/games" component={GameComponent} />
            </Router>
        );
    }
});

ReactDOM.render(<App />,document.querySelector('#app'));