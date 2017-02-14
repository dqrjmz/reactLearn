import { addTodo, toggleTodo, setVisibilityFilter, visibilityFilter } from './actions';
import { combineReducers } from 'redux';  //将多个reducer进行合并，返回


// 应用的所有state都存放到一个store中

// const initialState = {
//     visibilityFilter: visibilityFilter.showAll,
//     todos: []
// }

// 任务类表的状态
 function todos(state = [], action) {
    switch (action.type) {
        case addTodo:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case toggleTodo:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
       default:
            return state;
    }
}


// 筛选的状态
function visibilityFilters(state=visibilityFilter.showAll,action){
    switch(action.type){
        case setVisibilityFilter:
            return action.filter
        default:
            return state;
    }
}


// function todoApp(state={},action){
//     return {
//         visibilityFilter:visibilityFilter(state.visibilityFilter,action),
//         todos:todos(state.todos,action)
//     }
// }


export default combineReducers({
    //这个名称要和state相同
    todos,
    visibilityFilters 
});