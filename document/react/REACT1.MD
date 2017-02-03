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
- react.createElement  创建虚拟dom的两个方法
- react.createClass    创建虚拟dom的两个方法


##领悟
- jquery中导出的全局对象$===jQuery
- react中导出的全局对象React
- react-dom中导出的全局对象ReactDOM