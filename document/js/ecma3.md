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

## 原型
- 原型是函数的一个属性，是一个对象，可以用来给对象添加属性，方法；
- 可以给预定义的构造函数添加属性方法；
- 可以修改一个对象的原型对象

## 原型链
- 使用原型继承创建的对象实例，会在本身实例属性与原型属性上去寻找所调用的属性，本身没有，会根据原型链向父级的实例属性与原型属性上去寻找，最后找到Object，没有则会返回undefined

## for in
- 会遍历实例属性与原型属性，本身的，包括父级的

## prototype
- 这个对象默认有两个属性
	1. constructor: 指向构造函数本身
	2. __proto__: 指向生成此对象的构造函数的原型对象

- 当对象调用属性时，会在__proto__上去找；
- 构造函数的显示原型指向实例对象的隐式原型；

## zepto的设计
1. 修改对象的__proto__;
2. 一般会去定义在 o.__proto__.constructor.prototype.fnName=..,这样定义的方法在new 这个构造函数的时候，就会被每个实例共享；
3. 在封装时，需要将变量封装到局部的作用域中，一般使用匿名自执行函数来；
4. 数组对象const={0:'a',length:1}


## instanceof 
1. A instanceof B
	- 根据a实例的隐性原型与B构造函数原型的隐形原型的链条进行向上查找，找到同一个根源就是同一个