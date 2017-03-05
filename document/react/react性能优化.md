## react 性能优化
- 父组件改变state时，所有子组件都需要更新，但是可能有些组件的props没有改变，不需要改变，所以可以在子组件的声明周期中
 ```
    shouldComponentUpdate (nextProps, nextState) {  
        // 比较props或者states，返回true则更新照常，返回false则取消更新，且不会调用下面的两个生命周期函数
    }
 ```