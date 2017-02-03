import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory} from 'react-router';



var HomeComponent=React.createClass({
    render:function(){
        return (
            <div>
                首页
                <Link to="/games">游戏</Link>
                <Link to="/about">关于</Link>
                {this.props.children}
            </div>
        );
    }
});


/**
 * 路由嵌套：子视图【子组件】，在父视图【父组价】中显示；
 * 使用{this.props.children}显示子视图【子组件】
 */

var GamesComponent=React.createClass({
    render:function(){
        return (
            <div>
                游戏d
            </div>
        );
    }
});

var AboutComponent=React.createClass({
    render:function(){
        return (
            <div>
                关于
            </div>
        );
    }
});

var App=React.createClass({
    render:function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent}>
                    <Route path="/games" component={GamesComponent} />
                    <Route path="/about" component={AboutComponent} />
                </Route>
            </Router>
        );
    }
});

ReactDOM.render(<App />,document.querySelector('#app'));