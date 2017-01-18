var App=React.createClass({
    getDefaultProps:function(){
        console.log('默认属性');
    },
    getInitialState:function(){
        console.log('初始化组件状态');
        return {

        };
    },
    componentWillMount:function(){
        console.log('组件将要被装载');
    },
    componentDidMount:function(){
        console.log('组件已经被装载');
    },
    render:function(){
        console.log('组件进行渲染,渲染完成后组件才会被真正装载');
        return (
            <div>
                渲染组件完成来拉来
            </div>
        );
    }
});

ReactDOM.render(<App />,document.querySelector('#app'));