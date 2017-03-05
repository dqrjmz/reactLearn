#React part2

##ReactJs的特点
- 重新自造html,开销小；
- angular将html赋予强大其他功能特性；所以开销相对较大；
- virtual dom不依赖任何端客户端或者服务器端；端[浏览器，服务器，ios,android]
- reactJs就是写virtual dom的


##解决问题
1. 怎样将virtual dom渲染到不同的端？
- 需要不同的插件；react-dom , react-server
2. 如果一个虚拟dom需要复用？
- 需要封装到一个组件中
3. 创建虚拟dom的方式
- React.createElement
- jsx，简化虚拟dom元素


##react api
- react.createElement 
1. 创建虚拟dom的两个方法createElement('p',null,)
2. 返回react对象
- react.createClass    
1. 创建虚拟dom的两个方法jsx
2. 返回react对象

## jsx可展开属性 ...props

## react生命周期
```
import React,{component} from 'react';
import {render} from 'react-dom';


const MyComponent=React.createClass({
  getDefaultProps(){
      return {}
  },
  getInitialState(){
    return {

    }
  },
  componentWillMount(){
    console.log('组件将要被渲染');
  },
  render:是一个纯函数；
  render(){
    return (
      <div>
        {this.props.num}
      </div>
    );
  },
  componentDidMount(){
    console.log('组件已经被渲染');
  },
  componentWillReceiveProps(){
    console.log('组件属性被重新修改！');
  },
  shouldComponentUpdate(nextProps,nextState){
    console.log('组件是否应该被更新验证！');
    console.log(nextProps);
    return false;
  },
  componentWillUpdate(){
    console.log('组件将要被更新！');
  },
  componentDidUpdate(){
    console.log('组件已经被更新');
  }
});

render(<YourComponent />,document.querySelector('#app'))
```

```
class MyComponent extends React.Component{
  constructor(props){
    super(props);

    this.state={

    }
  }
   componentDidMount(){
    console.log('组件已经被渲染');
  }
  componentWillReceiveProps(){
    console.log('组件属性被重新修改！');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('组件是否应该被更新验证！');
    console.log(nextProps);
    return false;
  }
  componentWillUpdate(){
    console.log('组件将要被更新！');
  }
  componentDidUpdate(){
    console.log('组件已经被更新');
  }
}
MyComponent.defaultProps={
  
}
```

## mixin对象
- 这个对象的属性都会被拷贝到react对象的原型属性


##领悟
- jquery中导出的全局对象$===jQuery
- react中导出的全局对象React
- react-dom中导出的全局对象ReactDOM


##总结
1. 组件就是一个实现预定义接口的类
2. 对react组件原型进行拓展React.createClass({})