import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTo=({dispatch})=>{
	let input

	return (
		<div>
			<form onSubmit={}>
				<input ref={node=>{input=node}} />
				<button type="submit">add Todo</button>
			</form>
		</div>
		);
}