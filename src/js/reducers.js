 export default function changeFn(state,action){
 	switch(action.type){
 		case 'change':
 			return {value:action.value}
 		default:
 			return {value:'default'}
 	}
 }