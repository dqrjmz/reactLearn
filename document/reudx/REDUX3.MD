## redux

- action:一个描述怎么更新state的对象，含有type字段标识；

- action函数：生成action对象的函数，【类似工厂函数】；

- reducer函数，必须为纯函数；

- reducer拆分：因为action.type太多的话，reducer函数中的switch 会非常长；

- combineReducers：拼接reducer函数，因为最终reducer函数返回的是一个完整的state；
1. 自定义combineReducers函数
2. redux提供的combineReducers函数

- store：整个程序中的state的集合
1. 创建store时，需要将通过combineReducers的根reducer函数传递进去；

- subscribe:监听函数，当触发dispatch(action)时，触发；

- dispatch(action):函数,通知reducer函数改变state;
1. subscribe中注册的listener函数，在dispatch函数中调用
