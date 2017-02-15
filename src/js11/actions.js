export const addTodo='add_todo';
export const toggleTodo='toggle_todo';
export const setVisibilityFilter='set_visibility_filter';

export const visibilityFilter={
    showAll:'show_all',
    showCompleted:'show_completed',
    showActive:'show_active'
}

// 添加
export function addTodoFn(text){
    return {
        type:addTodo,
        text
    }
}

// 切换
export function toggleTodoFn(index){
    return {
        type:toggleTodo,
        index
    }
}

// 筛选
export function setVisibilityFilterFn(filter){
    return {
        type:setVisibilityFilter,
        filter
    }
}
