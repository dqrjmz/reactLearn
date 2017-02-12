export default const visibilityFilter(state='showAll',actin)=>{
	switch(action.type){
		case 'setVisibilityFilter':
			return action.filter
		default:
			return state;
	}
}