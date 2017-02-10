/**
 * 在reducer中引入actions
 */

import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/second';


// 初始换应用的state
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

/**
 * 创建reducer函数，传入应用的初始状态与action
 */

export const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, { visibilityFilter: action.filter })
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case 'TOGGLE_TODO': return Object.assign({}, state, {
            todos: state.todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        })
        default:
            return state;
    }
    return state;
}

/**
 * 对reducer进行拆分
 */
// const todos=(stata=[],action)=>{
//     switch(action.type){
//         case 'ADD_TODO':
//             return [
//                 ...state,{
//                     text:action.text,
//                     completed:false
//                 }
//             ]
//         case 'TOGGLE_TODO':
//                 return state.map((todo,index)=>{
//                     if(index==action.index){
//                         return Object.assign({},todo,{
//                             completed:!todo.completed
//                         })
//                     }
//                     return todo;
//                 })
//          default:
//             return state;
//     }
// }

// const todoApp=(stata=initialState,action)=>{
//     switch(action.type){
//         case 
//     }
// }

// const visibilityFilter=(state=SHOW_ALL,action)=>{
//     switch(action.type){
//         case 'SET_VISIBILITY_FILTER':
//             return action.filter
//         default:
//             return state;
//     }
// }
