#思考：我开发时候，我有哪些痛点？ 
   - 有些插件（基于zepto/jquery）用的不熟练，甚至没有用过；上手有成本;  
   - 重复的布局，写交互导致的效率低；   
   - 复杂的业务逻辑问题需要特别谨慎；  
   - 调试上也会有不流畅的问题； 
   - 关于缓存问题对于页面资源加载的影响； 
   - 关于git的操作冲突，建立分支等； 
   - css样式技巧点不足； 
   - js；语言本身 ，面向对象；
   - 结构；语义化，简洁明了；
   - 程序性能问题，可维护问题，可读性问题； 
   - 是否有时间去接触新东西问题；
   - 开发规范的实现，定义变量，使用哪种模块化方式，注释的写法......

##模块化概念
- 每一个程序，只能有一个入口

##前端框架的使用
- jquery框架，jquery插件，结构写在.html文件中
- react框架，react组件，结构写在组件中，.jsx


##模板
`一个产品的框架模型，使用不同的填充内容产生出不同的东西，但是结构不会变，变得只是内容` 



##什么：是什么？
    1.解决什么问题；
    2.什么原理解决的；
    3.怎么用；
    4.实战；
    5.坑点；


##使用webpack搭建一个ES6和REACT开发环境
    -.写es6语法代码          √
    -.写react代码            √
    -.css厂商前缀            ×
    -.图片转base64           √
    -.打开浏览器插件         √
    -.webpack-dev-server:开启一个nodejs服务器浏览器自动刷新 √
    -.css文件提取             √
    -.浏览器自动刷新更能



## react:前端view框架

## react-router:前端路由

## flux:前端架构模式
    解决问题：
        -.mvc带来的复杂度的削减；

## redux:JavaScript 状态容器（action,store,reducer）
    解决的问题：提供可预测化的状态管理
        -.应用中的state都存在了一个store上
        -.想要改变state的唯一办法是触发action
        -.为了描述action怎样改变state，我们需要用reducer函数来描述
        -.redux只有一个单一的store和一个根级的reducer函数
        -.一个react应用只有一个根组件
        
        三大原则：  
        1.单一数据源；  
        2.state是只读的  
        3.使用纯函数来执行修改  
    ```
        action:要做的修改是一个普通对象，{type:'',...}  
            a.Action Creator是一个函数，生成action对象； 
            b.action的写法也是有一定规范的，虽然不是硬性的；  
    ```


## postcss:css文件处理工具  
    a.postcss-cli工具安装  
    b.安装插件auto...  
    c.命令  
        1.postcss --use autoprefixer --dir dist *.css  
        当前目录下的css文件编译到dist目录下  

## webpack:模块加载器  
    解决问题：  
        -.js代码模块化  
        -.文件依赖  
        -.全局污染  
        -.阅读与维护  
    1.webpack-server-dev：打开的是http://location:8080指向的是文件输出目录  

    
 5.css-combo:css模块打包工具；
    a.css使用@import 'url'; 来进行css模块化 

 6.BEM:css模块化方式
    解决的问题：
        a.代码阅读
        b.代码维护

 7.babel：编译ES6到ES5
    a.配置.babelrc文件
    b.npm install --global babel-cli安装babel工具

 8.eslint:静态检查代码的语法和风格



 9.程序性能问题：
 1.web应用程序的性能问题设计到哪些方面  
    要从输入网址到页面显示出来这整个过程来看了；
    a.当需要多次引用一个对象的属性，数组中的元素时，将其存放到变量；（变量的速度更快）
    b.如果需要一个复杂的数据结构中的每一个元素操作，试着存下来，在使用
    c.循环时控制变量
    d.多次添加删除DOM会引起回流
    f.局部样式发生变化的话，回引起浏览器，修改css类可以减小这样的影响
    g.定义局部变量，减少作用域链查找问题

10.移动web开发：开发移动端网页
    解决的问题：
        a.屏幕尺寸适配问题
        b.各种设备兼容问题
        c.各种坑点

## es6（特性列表）+ecmascript(原型，原型链，作用域，call,apply等)
```
    module
    1.导出(命名模块 默认模块)
        命名模块导出：export a;
        默认模块导出：export default a;  (如果你想在模块中只导出一个借口)
    2.导入
        命名模块导入：
        默认模块导入：

    const 与 let

    字符串模板
        ${name}

    默认参数
        1.解决默认值为0是的bug

    多行字符串

    拆包表达式

    改进的对象表达式

    箭头函数 =&>

    Promise

    类

    变量的结构赋值
        从对象或者数组中提取值对变量进行赋值；

    1.es5中的forEach()方法不会再循环过程中判断，中断循环 for fo 可以
    2.for in会遍历出数组本身的的属性值，for of不会
```

 12.git:项目版本控制工具
    解决的问题：
        a.项目版本保存
        b.多人协作开发
    1.连通线上仓库和线下仓库的两种方法：
        a：git remote add origin git@github.com:github用户名/仓库名.git && git push -u origin master
        b: git clone
    2.坑点：
        a.sublime中传不上去，用户名有验证，ip。。

13.sublime text
    解决什么问题：
        a.开发写代码
        b.管理项目
        c.git之间打通

##关于web开发的方式

    从传统的pc端web开发：就是开发一个网站，展示性的，应用性的，因为pc端的网速和硬件设备比较给力，加上web端的部署，更新，开发等快速方便，所以pc端的应用肯定要web化；

    移动端web开发（webapp）：

    混合app开发:






