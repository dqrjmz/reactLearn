<<<<<<< HEAD
/**
 * view层行为的抽象
 */

const nextToDo = 0;


// 输入待办项，点击添加
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextToDo++,
        text
    };
}

// 对待办项进行的筛选
export const setVisibility = (fliter) => {
    return {
        type: 'SETVISIBILITY',
        filter
    };
}

// 点击待办项表示已经完成，再点击未完成
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
=======
let nextTodoId=0;
export const addTodo=(text)=>({
    type:'ADD_TODO',
    id:nextTodoId++,
    text
})

export const setVisibilityFilter=(filter)=>({
    type:'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo=(id)=>({
    type:'TOGGLE_TODO',
    id
});
>>>>>>> 707bb092264ed0501392a6fc649ba01bb0743687
