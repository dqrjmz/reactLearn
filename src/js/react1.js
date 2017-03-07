import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/cssModules/cssModeule.css'






class MyComponent extends React.Component{
	
	constructor(props){
		super(props);

		this.state={

		}
	}

	componentWillMount(){

	}

	componentDifMount(){

	}

	render(){
		return (
			<div onClick={this.clickHandler.bind(this)}>
				hh
			</div>
			);
	}

	clickHandler(ev){
		console.log(this);
	}

	componentWillReceiveProps(nextProps) {
		
	}

	componentWillUpdate(nextProps, nextState) {
		
	}

	componentDidUpdate(prevProps, prevState) {
		
	}

	componentWillUnmount() {
		
	}
}

//渲染组件
ReactDOM.render(<MyComponent />,document.querySelector('#app'));



