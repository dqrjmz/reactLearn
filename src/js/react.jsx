var App=React.createClass({
    mixins:[React.addons.LinkedStateMixin],
    propTypes:{
        userInfos:React.PropTypes.array.isRequired
    },
    // 定义默认属性
    getDefaultProps:function(){
        return {
            userInfos:[
                {name:'jmz'},
                {name:'jmz'},
                {name:'jmz'},
            ]
        };
    },
    // 定义默认状态
    getInitialState:function(){
        return {
            isClose:0,
            str:''
        };
    },
    // 渲染应用
    render:function(){
        return (
            <div>
            <span>mixins:{this.state.str}</span>
             <input type="text" name="" valueLink={this.linkState('str')} />
            </div>
        );
    }
});

ReactDOM.render(<App />,document.querySelector('#app'));