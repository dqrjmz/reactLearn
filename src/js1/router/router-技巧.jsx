import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute,browserHistory } from 'react-router';



var HomeComponent = React.createClass({
    render: function () {
        return (
            <div>
                <Link activeStyle={{color:'red'}} to="/" onlyActiveOnIndex>首页</Link>
                <Link activeStyle={{color:'red'}} to="/games">游戏</Link>
                <Link activeStyle={{color:'red'}} to="/about">关于</Link>
                {this.props.children}
            </div>
        );
    }
});

var ContainerComponent=React.createClass({
    render:function(){
        return (
            <div>
                <HomeComponent />
                {this.props.params.message}
            </div>
        );
    }
});

/**
 * 路由嵌套：子视图【子组件】，在父视图【父组价】中显示；
 * 使用{this.props.children}显示子视图【子组件】
 */

var GamesComponent = React.createClass({
    render: function () {
        return (
            <div>
                游戏
                <Link to="/gameInfo/1">faker</Link>
                <Link to="/gameInfo/2">cc</Link>
                {this.props.children}
            </div>
        );
    }
});

var AboutComponent = React.createClass({
    render: function () {
        return (
            <div>
                关于
            </div>
        );
    }
});


/**
 * this.props.params  获取属性上的参数对象
 */
var GameInfoComponent = React.createClass({
    render: function () {
        return (
            <div>
                详情{this.props.params.id}
            </div>
        );
    }
});

var NotFindComponent = React.createClass({
    render: function () {
        return (
            <div>
                404
            </div>
        );
    }
});


/**
 * <IndexRoute component={component} />
 * 定义路由匹配不到路径时的默认的页面
 */
var App = React.createClass({
    render: function () {
        return (
             <Router history={hashHistory}>
                <Route path="/:message" component={ContainerComponent}>
                </Route>
             </Router>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#app'));