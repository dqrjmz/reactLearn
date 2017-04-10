import React from 'react';
import ReactDOM from 'react-dom';


class MyComp extends React.Component{
	constructor(...args){
		super(...args);

		this.state={
			h:'00',
			m:'00',
			s:'00'
		}

		this.start();
	}

	start(){
		setInterval(()=>{
			this.tick();
		},1000);
	}

	tick(){
		const now=new Date();

		this.setState({
			h:now.getHours()>=10?now.getHours():'0'+(now.getHours()),
			m:now.getMinutes()>=10?now.getMinutes():'0'+(now.getMinutes()),
			s:now.getSeconds()>=10?now.getSeconds():'0'+(now.getSeconds())

		});
	}

	render(){
		return (
			<div>
				<span>{this.state.h}</span>:
				<span>{this.state.m}</span>:
				<span>{this.state.s}</span>
			</div>
			);
	}
}

ReactDOM.render(<MyComp />,document.querySelector('#app'));