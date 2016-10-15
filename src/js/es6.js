// 解构赋值
// let [a,b,c]=[1,3,4];
// console.log(a,b,c);
// 
let {a,b,c}={a:{A:'A'},b:'c',c:'d'};
console.log(a.A,b,c);


var set = new Set([1, 2, 3, 4, 4]);
console.log(...set);

let arr=[1,2,3,4];
console.log(...arr);

let weakset=new WeakSet(); //成员必须是对象
weakset.add({});
 
console.log(weakset);


console.log(document.querySelector('.same')); //获取单一的元素
console.log(document.querySelectorAll('.same'));  //获取所有元素
console.log(document.querySelectorAll('div.theme,div.disney'));