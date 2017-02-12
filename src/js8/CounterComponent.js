import React,{Component,PropTypes} from 'react';

class Counter extends Component{


	incrementIfOdd(){
		console.log(this);
		if(this.props.value%2!==0){
			this.props.onIncrement();
		}
	}

	incrementAsync(){
		setTimeout(this.props.onIncrement,1000);
	}

	self(){
		console.log(this.props);
	}
	/**
		事件调用中，调用dispatch方法去触发action
	*/
	render(){
		this.self();
		const {value,onIncrement,onDecrement}=this.props;
		console.log(this.props);
		return (
			<p>
			Click:{value} times
			{' '}
			<button onClick={onIncrement}>+</button>
			{' '}
			<button onClick={onDecrement}>-</button>
			{' '}
			<button onClick={this.incrementIfOdd.bind(this)}>Increment if odd</button>
			{' '}
			<button onClick={this.incrementAsync.bind(this)}>Increment if async</button>
			</p>
			);
	}
}

Counter.propTypes={
		value:PropTypes.number.isRequired,
		onIncrement:PropTypes.func.isRequired,
		onDecrement:PropTypes.func.isRequired
	}

export default Counter;