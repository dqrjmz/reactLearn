## 特点

- 代码分割；

- 加载器
    *不同文件使用不同的文件加载器*
    1. css
        - css-loader:处理.css文件；
        - style-loader:处理css-loader处理过的样式文件，把他放到页面的<style>中

- 插件系统


## 使用webpack模块的两种方式
1. 使用cli的方式调用；
2. 在哪nodejs中使用

## entry
1. entry:['entry0.js','entry1.js'],会将两个入口文件中的代码打包到一个文件中；
2. entry:{entry0:'entry0.js',entry1:'entry1.js'},会将代码打包到不同文件中