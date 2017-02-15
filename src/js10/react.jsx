

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const addNum=(sum1,sum2)=>{
	return {
		type:'add',
		sum1,
		sum2
	}
}

const redNum=(sum1,sum2)=>{
	return {
		type:'red',
		sum1,
		sum2
	}
}

// reducer中不知道要操作那个元素，只是数据
const reducerCounter=(state,action)=>{
	switch(action.type){
		case 'add':
			
			return (parseInt(action.sum1)+parseInt(action.sum2))
			
		case 'red':
			return (parseInt(action.sum1)-parseInt(action.sum2))
			
	}
}



class CounterComponent extends Component{
	addHandlerClick(ev,par){
		let num1=ReactDOM.findDOMNode(this.refs.num1).value ;
		let num2=ReactDOM.findDOMNode(this.refs.num2).value ;

		if(par=='+'){
			this.props.s.dispatch(addNum(num1,num2));
		}else{
			this.props.s.dispatch(redNum(num1,num2));
		}
		
		console.log(num1+num2);
	}
		 
	render(){
		return (
			<div>
				<input type="text" ref="num1" name="num1" />
				<input type="text" ref="num2" name="num2" />
				<button onClick={(e)=>{this.addHandlerClick(e,'+').bind(this)}} style={{width:'200px'}} type="button">+</button>
				<button onClick={(e)=>{this.addHandlerClick(e,'-').bind(this)}} style={{marginLeft:'20px',width:'200px'}} type="button">-</button>
				<span>计算结果{this.props.s.getState()?this.props.s.getState():'?'}</span>
			</div>
			);
	}
}




const stroe=createStore(reducerCounter);


class CounterBox extends Component{
	render(){
		return (
			<div>
				<CounterComponent s={stroe}  />
			</div>
			);
	}
}




const RenderMy=()=>{
	ReactDOM.render(<CounterBox  />,document.querySelector('#app'));
}
RenderMy();
stroe.subscribe(RenderMy);

console.log( CounterComponent)