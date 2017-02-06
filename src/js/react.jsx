
import React,{component} from 'react';
import {render} from 'react-dom';


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



