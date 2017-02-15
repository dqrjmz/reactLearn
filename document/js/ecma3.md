## apply
- 函数对象的原生方法；
- 就是当一个对象没有其他方法的时候，给他添加这个方法；
- bind

```
var obj={};
var objFn=function(){
	
}

window.objFn.call(obj); //这个obj对象就有这个objFn方法了；
```

- apply(arg1,params): arg1: object ,将函数对象中的this替换为指定对象； params: arguments 函数参数；
- call(arg1,param1,param2);