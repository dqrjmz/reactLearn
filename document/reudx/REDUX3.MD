## redux

- action:一个描述怎么更新state的对象，含有type字段标识；

- action函数：生成action对象的函数，【类似工厂函数】；

- reducer函数，一般必须为纯函数；
    1. 参数为currentState;
    2. 对当前状态做的哪种操作action;

- reducer拆分：因为action.type太多的话，reducer函数中的switch 会非常长；

- combineReducers：拼接reducer函数，因为最终reducer函数返回的是一个完整的state；
    1. 自定义combineReducers函数
    2. redux提供的combineReducers函数

- store：整个程序中的state的集合
    1. 创建store时，需要将通过combineReducers的根reducer函数传递进去；

- subscribe:监听函数，当触发dispatch(action)时，触发；

- dispatch(action):函数,通知reducer函数改变state;
    1. subscribe中注册的listener函数，在dispatch函数中调用


## 数据流

- 用来管理组件之间通信（数据传递）
- 单向
- 生命周期：
    1. 调用dispatch(action);任何地方都可以调用这个方法；
    2. redux store调用reducer函数
    3. 根reducer函数把多个子reducer输出合成单一state树；
    4. redux store保存了根reducer,返回完整的state树；


## 函数式无状态组件
- 函数式无状态组件
1. 在哪些场景下不适用
    - 组件内需要访问this
    - 需要用到组件生命周期

2. 有状态组件与无状体组件

3. 组件编写方式
    - const myComponent=React.createClass({});
    - class myComponent extends React.Component{};
    - 函数式无状态组件

## 怎么写reduc程序(先抽象state的数据结构)
1. 将程序的交互抽离出来 action
2. 将根据交互的相应程序编写出来，返回new state
3. 创建出数据模型store
4. 将ui分离出来，容器层，展示层，根据事件交互调用不同的交互抽象
5. 更新UI


## reducer函数的分离：
1. 根据state结构来分离操作不同部分的reducer函数操作；


## redux的使用；
1. action 在组件的事件中使用；所以在组件中import
2. reducer 函数是在创建store时使用，所以在创建store的模块引入