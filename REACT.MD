#react
1.出色的性能和夸浏览器兼容性问题：
    -独立浏览器的事件系统
    -DOM系统（virtual dom）
2.组件中的样式，事件，节点获取等，声明周期
    -每个组件只有一个顶层标签 
    -开发之前需要设计好页面中的组件，以及组件关系
    -使用es6写组件
    -this.props.xxx            属性对象  
    -this.state.xxx            状态对象
    -this.props.chilren        表示父组件的所有子组件
    -this.handleClick          事件处理方法
    -this.ordinaryFn           普通函数
    -className                 类的定义
    -style={{width: width}}    元素css样式定义
    -this.props.children       这个组件的子组件
    -setState({data:data-1},()=>{})  改变组件状态
    -this.refs.refName         获取节点
    -ReactDOM.findDOMNode(this.refs.refname)  将节点转换为
    -组件的状态就是数据，数据变化就是状态变化；这是state
    -组件中需要配置的项设为属性，porps,可以影响state的变化

##总结：
    1.获取组件属性的值：this.props对象
    2.组件是一个状态机器
    3.组件的声明周期
    4.获取组件状态的值：this.state对象
    5.组件并不是真实dom，而是存在内存当中的数据结构，叫virtual Dom
    6.this.props与this.state的区别
      this.props:用户一旦定义不能改变
      this.state:随时改变的值
    7.组件的生命周期
    8.{}一个花括号，表示这个一段js代码
    9.react组价中的标签不能不闭合