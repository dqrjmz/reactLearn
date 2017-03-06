import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/cssModules/cssModeule.css'


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
				<div className={styles.content}>
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
	}
});


MyComponent.methodFn1();

// class MyComponent extends React.Component{
// 	minxs=[MyMins]
// 	constructor(props){
// 		super(props);

// 		this.state={

// 		}
// 	}

// 	componentWillMount(){

// 	}

// 	componentDifMount(){

// 	}

// 	render(){
// 		return (
// 			<div>
				
// 				hh
// 			</div>
// 			);
// 	}

// 	componentWillReceiveProps(nextProps) {
		
// 	}

// 	componentWillUpdate(nextProps, nextState) {
		
// 	}

// 	componentDidUpdate(prevProps, prevState) {
		
// 	}

// 	componentWillUnmount() {
		
// 	}
// }


 ReactDOM.render(<MyComponent />,document.querySelector('#app'));


