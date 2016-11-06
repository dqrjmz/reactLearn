// 解构赋值
// let [a,b,c]=[1,3,4];
// console.log(a,b,c);
// 
// let {a,b,c}={a:{A:'A'},b:'c',c:'d'};
// console.log(a.A,b,c);


// var set = new Set([1, 2, 3, 4, 4]);
// console.log(...set);

// let arr=[1,2,3,4];
// console.log(...arr);

// let weakset=new WeakSet(); //成员必须是对象
// weakset.add({});
 
// console.log(weakset);


// console.log(document.querySelector('.same')); //获取单一的元素
// console.log(document.querySelectorAll('.same'));  //获取所有元素
// console.log(document.querySelectorAll('div.theme,div.disney'));


let obj={
	callObj(){
		let that=this;

		console.log(0);
		setTimeout(that.callObj,300);
	}
}
obj.callObj();

let a={c:1};
 function fn1(a,b){
 	console.log(a+b,this);
 }

 fn1.call(a,1,2);
 fn1.apply(a,[1,2]);

 