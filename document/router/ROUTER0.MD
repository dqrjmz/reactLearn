## react-router

>> component对应的组件就是一个视图，匹配到path规则切换组件就是切换视图；

1. Router
- 是一个容器组件；

2. Router
- 定义url路径与组件对应关系；匹配到哪个路径加载哪个组件；

3. hashHistory
- 根据url的hash变化来切换路由；

4. 路由配置代码：
```
<Router history={hashHistory}>
        <Route path="/" component={HomeComponent}>
            <IndexRoute component={NotFindComponent}></IndexRoute>
            
            <Route path="/games" component={GamesComponent}>
                <Route path="/gameInfo/:id" component={GameInfoComponent}>
                </Route>
            </Route>
        </Route>
</Router>
```

5. 操作属性接口
- this.props.children  子组件
- this.props.params.[message] 子组件传递的参数
