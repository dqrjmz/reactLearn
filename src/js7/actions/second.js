/**
 * 创建action，创建action创建函数
 * 触发action, 触发action创建函数
 */


// 多数情况下type会被定义为字符串常量

export const ADD_TODO='ADD_TODO';
export const TOGGLE_TODO='TOGGLE_TODO';
export const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';

// 筛选条件类型
export const VisibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}

//添加待办项列表
export const addTodo=(text)=>{
    return {
        type:ADD_TODO,
        text
    };
}

// 点击切换事件的状态，以index来确定
export const toggleTodo=(index)=>{
    return {type:TOGGLE_TODO,index};
}

// 设置筛选条件类型
export const setVisibilityFilter=(filter)=>{
    return {type:SET_VISIBILITY_FILTER,filter};
}

/* 
   1.使用dispatch()方法触发reducer函数：
     sotre直接调用.dispatch(addTodo('ADD_TODO'));action或者action创造函数
   2.大多数通过react-redux的connect()帮助器调用
     bindActionCreators():自动把多个action创建函数绑定到dispatch()上
*/

//创建一个被 绑定的action函数
//const boundAddTodo=(text)=>dispatch(addTodo(text));


