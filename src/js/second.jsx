import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
	// 构造函数
    constructor(props) {
	    // 调用父级
	    super(props);
	    // render方法绑定this
	    this.render = this.render.bind(this); //只能对一层起作用
	    // 组件的状态初始化
	    this.state = {
	      items: this.props.items,
	      disabled: true
	    };
    }

    // render
    // render(){
    // 	//let lis=this.
    // }
}