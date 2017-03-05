import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import DatePicker from 'antd/DatePicker';

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
				<div>
					<input type="text" name="username" defaultValue="jmz"  onChange={this.changeHandler} />
					<textarea defaultValue="heh" onChange={this.changeHandlerInfo}></textarea>
					<select defaultValue="B">
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
					</select>
					<select multiple={true} defaultValue={['B', 'C']}>
					    <option value="A">Apple</option>
					    <option value="B">Banana</option>
					    <option value="C">Cranberry</option>
					  </select>
					  <input type="checkbox" checked={this.state.checked} onChange={this.changeHandlerBox} />
				</div>
			);
	},
	changeHandler(ev){
		ev.target.value=ev.target.value;
		console.log(ev.target,ev.target.value);
	},
	changeHandlerInfo(ev){

	},
	changeHandlerBox(ev){
		setTimeout(()=>{
			this.setState({
				checked:!this.state.checked
			});
		},100);
		// ev.preventDefault();
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
// function Jsx(){
// 	return (
// 		<div>
// 			<ul>
// 				<li>jmz</li>
// 			</ul>
// 		</div>
// 		);
// }

// var JsxA=Jsx();

// console.log(JsxA);

 ReactDOM.render(<MyComponent />,document.querySelector('#app'));