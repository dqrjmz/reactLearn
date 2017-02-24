import React,{findDOMNode,Component} from 'react';
import ReactDOM from 'react-dom';
import connect from 'react-redux';
import * as action from './actions';

// 事件触发后，
// 会触发一个action
// 使用dispatch
// 或者
class App extends Component{
	render() {
    return (
      <div>
        <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
        {this.props.propsValue}
      </div>
    );
  }
  changeHandle(ev){
  	 const node = ReactDOM.findDOMNode(this.refs.input);
    const value = node.value.trim();
    this.props.changeVal(value);
  }
}

function mapStateToProps(state) {
  return {
    propsValue: state.value
  }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,action)(App);