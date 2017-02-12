const todo=(state,action)=>{
	switch(action.type){
		case 'addTodo':
			return {
				id:action.id,
				text:action.text,
				completed:false
			}
		case 'toggleTodo':
			return {
				...state,
				completed:!state.completed
			}
		default:
			return state
	}
}

const todos=(state=[],action)=>{
	switch(action.type){
		case 'addTodo':
			return [
				...state,
				todo(undefined,action)
			]
		case 'toggleTodo':
			return state.map(item=>{
				return todo(t,action)
			})
		default:
			return state;
	}
}

export default todos;