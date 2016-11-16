import React,{Component} from 'react';
import ReactDOM from 'react-dom';



// 创建一个react组件
class ListCompontent extends Component{
	 constructor(props){
		super(props);
	}
	render(){
		return (
				<div>jmz</div>
			);
	}
}

ReactDOM.render(<ListCompontent />,document.querySelector('#root'));