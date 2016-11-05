#现阶段需要准备的那些知识？
- 先将项目代码模块化开来；（关于公共的模块部分慢慢再拆分开）
- 页面的组件化，将页面的每一个部分当做一个独立的组件（使用reactjs，web组件框架）
- 混合开发的概念以混合框架，调用原生的应用的功能与组件（也需要找框架）
- gulp+webpack搭配框架来构建一个开发工程
- node
- 各种细节点css3,es6，html5等

#思考：我们作为web前端前端开发，我们在开发哪些东西？
- web站点【web应用程序（应用型的站点）】pc端
- web站点【webapp】移动端(微信端，浏览器端（m端），app端，qq端，微信小程序)
- 混合应用程序【hybrid app】移动端
- 原生开发【native app】 移动端
- react-native vue-vuex等

**总结**
- 我们开发的东西就这几种，但是有些可以使用不同的技术来实现
- 开发那种东西就去了解那种应用的框架

#思考：布局方面，我要怎样进行优化，与进阶？
-  各种布局方式【pc,app】端，解决方案；
- 【pc,app】通用解决方案；
-  响应式？有哪些解决方案；

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
- 雪碧图的自动化实现


##模块化概念
- 每一个程序，只能有一个入口

##前端框架的使用
- jquery框架，jquery插件，结构写在.html文件中
- react框架，react组件，结构写在组件中，.jsx


##模板
>一个产品的框架模型，使用不同的填充内容产生出不同的东西，但是结构不会变，变得只是内容`>



##什么：是什么？
1.解决什么问题；
2.什么原理解决的；
3.怎么用；
4.实战；
5.坑点；


##使用webpack搭建一个ES6和REACT开发环境
- 写es6语法代码          √
- 写react代码            √
- css厂商前缀            ×
- 图片转base64           √
- 打开浏览器插件         √
- webpack-dev-server:开启一个nodejs服务器浏览器自动刷新 √
- css文件提取             √
- 浏览器自动刷新更能



## react:前端view框架

## react-router:前端路由

## flux:前端架构模式
**解决问题：**

- mvc带来的复杂度的削减；

## redux:JavaScript 状态容器（action,store,reducer）
*解决的问题：提供可预测化的状态管理*

- 应用中的state都存在了一个store上
- 想要改变state的唯一办法是触发action
- 为了描述action怎样改变state，我们需要用reducer函数来描述
- redux只有一个单一的store和一个根级的reducer函数
- 一个react应用只有一个根组件
        
##三大原则：  
1.单一数据源；  
2.state是只读的  
3.使用纯函数来执行修改  
```
action:要做的修改是一个普通对象，{type:'',...}  
    a.Action Creator是一个函数，生成action对象； 
    b.action的写法也是有一定规范的，虽然不是硬性的；  
```


## postcss:css文件处理工具  

- postcss-cli工具安装  
- 安装插件auto...  
- 命令  
1.postcss --use autoprefixer --dir dist *.css  
**当前目录下的css文件编译到dist目录下**

## webpack:模块加载器  
**解决问题**

- js代码模块化  
- 文件依赖  
- 全局污染  
- 阅读与维护 
1.webpack-server-dev：打开的是http://location:8080指向的是文件输出目录  

    
##css-combo:css模块打包工具；
- css使用@import 'url'; 来进行css模块化 

##BEM:css模块化方式
**解决的问题：**

- 代码阅读
- 代码维护

##babel：编译ES6到ES5

- 配置.babelrc文件
- npm install --global babel-cli安装babel工具

##eslint:静态检查代码的语法和风格

##程序性能问题：


##移动web开发：开发移动端网页
**解决的问题：**

- 屏幕尺寸适配问题
- 各种设备兼容问题
- 各种坑点

## es6（特性列表）+ecmascript(原型，原型链，作用域，call,apply等)



##git:项目版本控制工具
**解决的问题：**

- 项目版本保存
- 多人协作开发

1.连通线上仓库和线下仓库的两种方法：

- git remote add origin git@github.com:github用户名/仓库名.git && git push -u origin master
- git clone
   
2.坑点：

- sublime中传不上去，用户名有验证，ip。。

##sublime text
**解决什么问题：**

- 开发写代码
- 管理项目
- git之间打通

##关于web开发的方式
1.从传统的pc端web开发：就是开发一个网站，展示性的，应用性的，因为pc端的网速和硬件设备比较给力，加上web端的部署，更新，开发等快速方便，所以pc端的应用肯定要web化；（使用react框架）

2.移动端web开发（webapp）：html5应用（使用react框架）


3.混合app开发:
    混合开发框架：

4.react native:


##组件化开发
**就是模仿着跟原生开发一样，都用组件来组合页面生成应用**






