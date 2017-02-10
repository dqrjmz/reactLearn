
import React,{component} from 'react';
import {render} from 'react-dom';


/**
 * 函数式无状态组件
 * 起源：纯函数
 */

const MyCom=(props,context )=>{

  return (
    <div style={context}>
       {props.children}
    </div>
  );
}

class App extends React.Component{
  //  childContextTypes={
  //   fontFamily:React.PropTypes.string
  // }
  getChildContext(){
    return {
      fontFamily:'Helvetica Neue',
      color:'red'
    }
  }
  render(){
    return (
      <div>
        <MyCom></MyCom>
      </div>
    );
  }
}
App.childContextTypes={
fontFamily:React.PropTypes.string,
color:React.PropTypes.string
}

render(<App name='jmz' />,document.querySelector('#app'));
// const YourCom=()=>{}

