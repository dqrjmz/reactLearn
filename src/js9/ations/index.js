let nextTodoId=0;
export const addTodo=(text)=>{
	return {
		type:'addTodo',
		id:nextTodoId++,
		text
	}
}

export const setVisibilityFilter=(filter)=>{
	return {
		type:'setVisibilityFilter',
		filter
	}
}

export const toggleTodo=(id)=>{
	type:'toggleTodo',
	id
}