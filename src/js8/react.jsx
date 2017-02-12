
import React,{component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';



// 定义action,行为抽象

const increment=()=>{
	return {
		type:'increment'
	}
}
const decrement=()=>{
	return {
		type:'decrement'
	}
}

// 相应抽象
const initialState=0;
const counter=(state=initialState,action)=>{
	if(state==undefined){
		return state;
	}

	switch(action.type){
		case 'increment':
			return state+1;
		case 'decrement':
			return state-1;
		default:
			return state;
	}
}

// 数据生成，action与reducer桥梁
const store=createStore(counter);

// 获取数据状态
const render=()=>{
	document.getElementById('app').innerHTML=store.getState();
}

// 事件驱动dispatch
document.getElementById('app').addEventListener('click',(e)=>{
	store.dispatch(increment());
},false);

render();

store.subscribe(render);











// const store=createStore(counter);
// const rootEl=document.getElementById('app');

// const render=()=>ReactDOM.render(<Counter 
// 		value={store.getState()}
// 		onIncrement={()=> store.dispatch(increment())}
// 		onDecrement={()=> store.dispatch(decrement())}
// 		/>,
// 		rootEl
// 	);

// render()
// store.subscribe(render);


