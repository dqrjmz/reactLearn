## react-redux
- 基于容器组件和展示组件相分离的思想；

- 容器组件：
    1. 技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件
    2. 将展示组件与redux关联起来；
    3. import {connect} from 'react-redux'; connect()(todo) todo:为组件，使用connect包装过后，成为容器组件

- 高阶函数
    1. 函数里面返回函数
    ```
    function a(){
        return function b(a){
            console.log(a);
        }
    }
    a()('a')
    ```

- 数据流工具
1. react-redux
2. redux-chunck:发送异步action的库
3. redux-gen:利用生成器，实现middleware
4. react-router-redux
5. react-redux-form