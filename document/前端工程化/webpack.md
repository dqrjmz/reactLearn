#webpack

1. 热更新/热替换/热模块替换
    [参考链接](https://fakefish.github.io/react-webpack-cookbook/Running-a-workflow.html,https://fakefish.github.io/react-webpack-cookbook/Automatic-browser-refresh.html)

 ```
 //入口文件" 
    /*
        @param one webpack 模块，开启一个服务器
        @param two 入口模块,设置输入目录为http://localhost:8080

        'webpack-dev-server/client?http://10.101.28.76:91', 
        'webpack/hot/only-dev-server.js'/'webpack/hot/dev-server.js'

    */
    //自动刷新
    //方式一：
    // entry: ['webpack/hot/dev-server.js', 'webpack-dev-server/client?http://localhost:8080', './src/js/one.js'],

   // ?方式二：添加<script src="http://localhost:8080/webpack-dev-server.js"></script>
 ```

2. 文件输出路径与名称
	[name]表示图片文件的文件名
	[ext]表示图片文件的扩展名
	[hash]表示图片文件的哈希值


## 代码拆分
- 将一整个代码，拆分为块【chunks】,并根据需求加载代码块；

## 使用
- 在代码库中定义拆分点；
- amd 
- 定义分割点的方式：

```
require(['a','b'],function(){
	var a=reqiure('a');
	var b=require('b');

});
```

- commonjs
1. 定义分割点方式：

```
require.ensure(['a','b'],function(a,b){
	
});
```

