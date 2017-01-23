import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// 样式模块
// import '../css/index.css'

// var App = React.createClass({
//     render: function () {
//         return (
//           <div>
              
//           </div>
//         );
//     }
// });



// // 定义一个虚拟dom生成器
// //view层
// const Counter=((value)=>{
//     <h1>{value}</h1>
// });

// // 根据action，和当前state,对state进行操作，返回新的state
// const reducer=(state=0,action)=>{
//     switch(action.type){
//         case 'ADD':return state+1;
//         case 'REDUCE':return state-1;
//         default:return state;
//     }
// }

// // 创建一个状态容器
// const store=createStore(reducer);


// const render=()=>{
//     ReactDOM.render(<Counter value={store.getState()} />,document.querySelector('#app'));
// }

// store.subscribe(render);
// render();

const Counter = (value ) => {
    <div>
        
    
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
}

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);