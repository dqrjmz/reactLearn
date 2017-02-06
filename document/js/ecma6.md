#ES6

##作用域
- 凡是{}都是一个独立的作用域区间

##变量赋值：解构赋值
>从数组或者对象中提取值对变量进行赋值

1.解构不成功   
```
let [a,b]=[1]
```
2.解构不完全  
3.默认值  



###对象解构赋值
1.是赋值给对象属性值，而不是属性

###异步编程
>不会阻塞其他js脚本的执行

```
所谓"异步"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。
```

1.回调函数  
2.promise  
3.generator  

###模块化
1. 定义了模块的规范写法；  
2. 但是模块的划分会因人而异；  
3. react组件的划分也是会有不同；  
4. 怎样做到更好的划分模块与组件，需要多借鉴别人的思想  
5. 在编译时就能确认模块的关系，其他的模块加载器需要在运行时  

###模块模式方案：
1. 匿名闭包


###class
```
constructor(){
    中的this值为类本身
}

zdyMethod(){
    中this值为实例对象本身
}
```

### 箭头函数
1. 技巧一
```
返回值，直接返回
var fn=(id)=>({
    type:'a',
    id
})
fn() //{type:'a',id:id}
```
```
/**
 * Symbol()  
 * 1. 数据类型
 * 2. 值类型数据
 * 
 * 使用？
 */

const symbolVal=Symbol('jmz');
// 此时的symbolVal就是一个Symbol类型的变量
// 应用场景？




/**
 * 遍历器
 * iterator,比for,遍历性能快；
 * 
 * 使用？
 */

const arr=[1,2,3];
const iteratorVal=arr[Symbol.iterator]();

const obj={};
// const iteratorObj=obj[Symbol.iterator]();
// console.log([...iteratorObj]);
//console.log(iteratorVal.next().value);

//使用场景？


/**
 * 展开运算符
 * ...props
 * 
 * 使用？
 */

const arr1=[1,2,3];

//console.log(...arr1);

//使用场景？

/**
 * generator 异步编程方案
 * 返回遍历器对象；iterator
 * 
 * 使用？
 * 每次调用一个next方法，返回一个yield之前所有代码的执行的值；
 */

function* generatorFn(){
    console.log('jmz'+(yield 'b'));
    yield console.log('jay');
    yield console.log('jez');
}
const genFn=generatorFn();
 console.log(genFn.next('params'));
  genFn.next();


  const myIterator={};
  myIterator[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  console.log([...myIterator]);
```

##知识点
1. es5中的forEach()方法不会再循环过程中判断，中断循环 for fo 可以
2. for in会遍历出数组本身的的属性值，for of不会
3. each:jquery的遍历


#ecmascript中的面向对象
```
/**
 * 面向对象编程的方式，模块化；
 */

function ObjProject(){
    // 这里定义变量【属性】
    this.a=0;
    this.b=3;
}

// 这里定义方法【行为】
ObjProject.prototype.init=function(){
    console.log(this.a+this.b);
}

new ObjProject().init();


// 继承
function ObjSub(){
    ObjProject.call(this,null);
    this.name="jmz";
    this.age='24';
}

ObjSub.prototype=ObjProject.prototype;

ObjSub.prototype.say=function(){
    console.log(this.name,this.a+this.b);
}

new ObjSub().say();

上下两者比较起来更容易理解；

var obj={
    // 这里定义变量【属性】
    a:0,
    b:2,
    // 这里定义方法【行为】
    init(){
        console.log(this.a+this.b+'jmz');
    }
}

obj.init();

var objSub=Object.assign({
    c:'5',
    init(){
        console.log(this.c+this.a+'df')
    }
},obj);

objSub.init();
```

