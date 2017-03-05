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


## loader配置参数
```
loaders: 加载器
 [
     {
         test:正则表达式,匹配的文件名则使用这个加载器。
         include: 匹配的目录则进一步处理
         exclude: 匹配的目录则排除
         loader: `!`用于分隔loader 字符串形式,作用和数组形式一样
         loaders: ['loader',...] 数组形式,作用和字符串形式一样
     }
 ]

 如果同一文件需要多个loaders处理,
   也就是使用loaders: ['loader',...] 数组形式,
   loader的参数不能使用query:{}写法了。只能用拼接字符串写法。
```
