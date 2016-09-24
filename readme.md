思考：我开发时候，我有哪些痛点？
    1.有些插件（基于zepto/jquery）用的不熟练，甚至没有用过；上手有成本；
    2.重复的布局，写交互导致的效率低；
    3.复杂的业务逻辑问题需要特别谨慎；
    4.调试上也会有不流畅的问题；
    5.关于缓存问题对于页面资源加载的影响；
    6.关于git的操作冲突，建立分支等；
    7.css样式技巧点不足；
    8.js；
    9.结构；
    10.程序性能问题，可维护问题，可读性问题；
    11.是否有时间去接触新东西问题；



什么：是什么？
    1.解决什么问题；
    2.什么原理解决的；
    3.怎么用；
    4.实战；
    5.坑点；


1.使用webpack搭建一个各种功能的开发环境
    a.写es6语法代码          √
    b.写react代码            √
    c.css厂商前缀            ×
    d.图片转base64           √
    e.打开浏览器插件         √
    f.webpack-dev-server:开启一个nodejs服务器浏览器自动刷新 ×
    g.css文件提取             √
    h.浏览器自动刷新更能


2.react:前端view框架
    a.每个组件只有一个顶层标签 
    b. this.props          属性对象  
    c.this.props.chilren   表示父组件的所有子组件

2.1.react-router:前端路由

2.2.flux:前端架构模式
    解决问题：
        mvc带来的复杂度的削减；


3.postcss:css文件处理工具
    a.postcss-cli工具安装
    b.安装插件auto...
    c.命令
        1.postcss --use autoprefixer --dir dist *.css
        当前目录下的css文件编译到dist目录下

 4.webpack:模块加载器
    解决问题：
        a.js代码模块化
        b.文件依赖
        d.全局污染
        f.阅读与维护
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

11.es6
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


