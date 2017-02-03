## redux中的异步操作

#问题
- redux的工作流程？
1. 从view中发出action(store.dispatch(actin)),执行reducer改变state,监听函数刷新virtual dom;（以上是同步执行）

- reducer在异步操作后结束？
1. 使用中间件；








##概念
1. 中间件
- 就是一个函数，添加在action发出和执行reducer函数之间，添加其他功能；
