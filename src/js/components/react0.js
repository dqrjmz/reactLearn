import React from 'react';
import ReactDOM from 'react-dom';

const MyMins={
	componentWillMount(){
		console.log('componentWillMount...');
	}
}
const YourMins={
	methodFn(){
		console.log('methodFn...');
	}
}

//定义组件
const MyComponent=React.createClass({

	// react 插件
	mixins:[MyMins,YourMins],

	//类方法
	statics:{
		methodFn1:function () {
			console.log('statics 类方法....');
		}
	},


	getInitialState(){
		return {
			checked:true
		}
	},

	componentDidMount(){
		this.methodFn();
	},
	render(){
		return (
				<div className={styles.content} onClick={this.clickHandler}>
					<div className={styles.header}>
						header
					</div>
					<div className={styles.center}>
						<div className={styles.left}>
							left
						</div>
						
						<div className={styles.right}>
							right
						</div>
					</div>
				</div>
			);
	},
	clickHandler(ev){
		console.log(this);
	}
});


MyComponent.methodFn1();

//渲染组件
ReactDOM.render(<MyComponent />,document.querySelector('#app'));


