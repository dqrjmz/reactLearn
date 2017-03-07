import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();

		this.state={
			a:''
		}
	}
	update(){
		this.setState({
			//a:ReactDOM.findDOMNode(this.a).value,
			a:this.a.refs.input.value,
			b:this.refs.b.value
		});
	}

	render(){
		return (
			<div>
				<Input 
					//ref="a" 
					ref={component => this.a=component}
					//onChange={this.update.bind(this)} 
					update={this.update.bind(this)} />
					<span>{this.state.a}</span>
				<input 
					type="text" 
					ref="b" 
					onChange={this.update.bind(this)} />
					<span>{this.state.b}</span>
			</div>
			);
	}
}

/*
	当组件只返回 input时候，
	<input type="text" ref="input"  onChange={this.props.update} />
	a:ReactDOM.findDOMNode(this.a).value,
	ref={component => this.a=component}

	当包裹div时候
	<div>
		<input type="text" ref="input"  onChange={this.props.update} />
	</div>
	ref={component => this.a=component}
	a:this.a.refs.input.value

**/

class Input extends React.Component{
	render(){
		return (
			<div>
				<input type="text" ref="input"  onChange={this.props.update} />
			</div>
		);
	}
}

export default App;