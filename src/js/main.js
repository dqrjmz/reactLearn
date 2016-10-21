 // es6文件
 import  './es6.js';


 /*
	 加载css文件
	 加载mod1
	 移动端模板
 */
 // import '../css/index';
 // import './mod1.js';

 // 引入material-ui的react ui组件
 // import './material-ui/index.jsx';

 // import convertDate from './lib/convertDate.js';
 // console.log(convertDate(new Date(2014,3,5,3,2,2),'YYYY/MM-DD hh:mm:ss'));


 import React from 'react';
 import ReactDOM from 'react-dom';

 import './index'

/* class A extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             text: 'text'
         };

         this.handleClick = this.handleClick.bind(this);
         
     }

     handleClick() {
         this.setState({ text: ReactDOM.findDOMNode(this.refs.text).innerText + 'dfdr' });
     }

     componentDidMount(){
     		  this.setState({text:'ggh'});
     }

     render() {
         return ( < div >
         			<B onBtnClick={this.handleClick} />
             < span ref = "text" > { this.state.text } < /span> < /div>
         );
     }
 }
 class B extends React.Component {
     constructor(props) {
         super(props);

         this.render=this.render.bind(this);
     }

     render(){
				return (
					<div>
	     		 < input type = "button"
	             value = "button"
	             ref = "btn"
	             onClick = { this.props.onBtnClick}
	             />
	     		</div>
				);
     }
 }
 ReactDOM.render( < A / > , document.getElementById('page'));*/
 //  import {CommentBox} from './components/Comment';

 //  ReactDOM.render(<CommentBox url="../data/data.json"  pollInterval={3000}  />,document.getElementById('page'));

 // /**
 //  * 
 //  */
 //  // import {ThemeBox} from './components/ThemeBox';
 // ReactDOM.render(<ThemeBox />,document.getElementById('page'));



 // class MyC extends React.Component{
 // 		constructor(props){
 // 			super(props);
 // 		}

 // 		componentWillMount(){
 // 			console.log(this.refs.ref);
 // 		}

 // 		componentDidMount(){
 // 			console.log(React.findDOMNode(this.refs.ref));
 // 		}

 // 		render(){
 // 			return (
 // 				<div ref="ref">
 // 					jmz
 // 				</div>
 // 				);
 // 		}
 // }

 // ReactDOM.render(<MyC />,document.body);


 //引入react组件 
 // import MyButton from './components/MyButtonController.jsx';
 // ReactDOM.render(<MyButton />,document.body);
 // import {NavFixed} from './components/navFixed/NavFixed.jsx';
 //  import {A} from './components/MarkdownEditor.jsx';
 // ReactDOM.render(<A />,document.body);
 // import {CommentBox} from './components/Comment.jsx';
 // ReactDOM.render(<CommentBox url="../data/data.json"  pollInterval={3000} />,document.body);


 // // import './second';
 // 引入redux
 //   import Redux from 'redux';

 // /** Action Creators */
 // function inc() {
 //   return { type: 'INCREMENT' };
 // }
 // function dec() {
 //   return { type: 'DECREMENT' };
 // }

 // function reducer(state, action) {
 //   // 首次调用本函数时设置初始 state
 //   state = state || { counter: 0 };

 //   switch (action.type) {
 //     case 'INCREMENT':
 //       return { counter: state.counter + 1 };
 //     case 'DECREMENT':
 //       return { counter: state.counter - 1 };
 //     default:
 //       return state; // 无论如何都返回一个 state
 //   }
 // }

 // // 创建一个store
 // var store = Redux.createStore(reducer);

 // console.log( store.getState() ); // { counter: 0 }

 // store.dispatch(inc());
 // console.log( store.getState() ); // { counter: 1 }

 // store.dispatch(inc());
 // console.log( store.getState() ); // { counter: 2 }

 // store.dispatch(dec());
 // console.log( store.getState() ); // { counter: 1 }



 // 导入redux
 // import { createStore } from 'redux';

 /**
  * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
  * 描述了 action 如何把 state 转变成下一个 state。
  *
  * state 的形式取决于你，可以是基本类型、数组、对象、
  * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
  * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
  *
  * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
  * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
  */
 // function counter(state = 0, action) {
 //   switch (action.type) {
 //   case 'INCREMENT':
 //     return state + 1;
 //   case 'DECREMENT':
 //     return state - 1;
 //   default:
 //     return state;
 //   }
 // }

 // // 创建 Redux store 来存放应用的状态。
 // // API 是 { subscribe, dispatch, getState }。
 // let store = createStore(counter);

 // // 可以手动订阅更新，也可以事件绑定到视图层。
 // store.subscribe(() =>
 //   console.log(store.getState())
 // );

 // // 改变内部 state 惟一方法是 dispatch 一个 action。
 // // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
 // store.dispatch({ type: 'increment' });
 // // 1
 // store.dispatch({ type: 'INCREMENT' });
 // // 2
 // store.dispatch({ type: 'DECREMENT' });
 // // 1
 // store.dispatch({ type: 'jmz' });


 // function addTodoAction(text){
 //   return {
 //     type:'addTodos',
 //     text
 //   }
 // }


 /*
	es6：RegExp
	*/
 // let iphoneReg=new RegExp(/xyZ/,'ig');
 // console.log(iphoneReg.test('xyz'));
 // console.log(new RegExp(/xyZ/,'ig').flags);  //获取修饰符

 // console.log('xyz'.match(/xyz/ig));

 /*
	测试热加载
	*/
 // console.log($);
 // alert('dfddfdfdfffdf');
 //console.log('dfdfddfdfdfdfdjmzffgfgdf'); 

 /*
	Promise写的异步回调
	*/
 // new Promise((success,def) => {
 //     $.ajax({
 //         url:'http://api.17u.cn/hotelservices/HotelPriceHandler.ashx?HotelId=135936&ComeDate=2016-09-05&LeaveDate=2016-09-6&RefIdType=1&Refid=0&elres=1&Plant=1&IsByPromo=1&isOnceShowAll=true&IsShowAllGuarantee=1&pic=1&AlliancePlatId=0&AllianceRefid=0&ResFormat=json&iid=1473074946792&_=1473074946634',
 //         dataType: 'jsonp',
 //         jsonp: 'jsoncallback', //这里会随机产生callback函数
 //         type: 'get',
 //         success(data) {
 //             success(data);
 //         },
 //         error() {
 //             def ('err');
 //         }
 //     });
 // }).then((data) => {
 //     alert(data);
 // }, (err) => {
 //     alert(err);
 // });

 // console.log(a+b+'4545656');
 // console.log($.extend({}, { a: 'b', c: 'd' }));

 // alert('dfd f');
 // // console.log(j1, j2);
 // // let iNum = 12;

 // // //alert('dffffgdfsdsddf');
 // // // let a = 0;
 // // // const b = 0;
 // // // console.log($j);

 // // // class
 // // /*
 // //  class A {
 // //      constructor(name, age) {
 // //          this.name = name;
 // //          this.age = age;
 // //      }

 // //      say() {
 // //          // 几种保持this指向的方式
 // //          let that = this;
 // //          setTimeout(() => {
 // //              console.log(this.name + '--' + this.age + '==' + this);
 // //          }, 1000);

 // //          setTimeout(function() {
 // //              console.log(this.name + '--' + this.age + '==' + this)
 // //          }.bind(this), 1000);


 // //          setTimeout(function() {
 // //              console.log(that.name + '--' + that.age + '==' + this)
 // //          }, 1000)

 // //          // 反例子
 // //          setTimeout(function() {
 // //              console.log(this.name + '--' + this.age + '==' + this)
 // //          }, 1000)
 // //      }
 // //  }

 // //  let a = new A('jmz', 21);
 // //  a.say();
 // // */

 // // // 解构
 // // // const obj = { a: 1, b: 0 };
 // // // let flag = false;

 // // // const { a, b } = obj;
 // // // console.log(a + '=' + a, b + '=' + b);

 // // // //alert('webpack-dev-serverghgh');
 // // // // 创建promise对象，发异步
 // // // var promise = new Promise(function(resolve, reject) {
 // // //     let value = '',
 // // //         error = '';
 // // //     $.ajax({
 // // //         url: './src/data/data.json',
 // // //         dataType: 'json',
 // // //         type: 'get',
 // // //         success(msg) {
 // // //             resolve(msg);
 // // //         },
 // // //         error(XMLHttpRequest, textStatus, errorThrown) {
 // // //             reject(errorThrown);
 // // //         }
 // // //     });
 // // // });
 // // // // 异步后处理
 // // // promise.then((value) => {
 // // //     console.log(value);
 // // //     console.log(value.result);
 // // // }, (error) => {
 // // //     console.log(error);
 // // // });


 // // // generator
 // // // function* helloWorldGenerator() {
 // // //   yield 'hello';
 // // //   yield 'world';
 // // //   return 'ending';
 // // // }

 // // // let hw = helloWorldGenerator();

 // // // hw.next()


 // // // Symbol
 // // console.log(Symbol() == Symbol());

 // // // let bounce = new bounce();
 // // // console.log(bounce);


 // // /*
 // //   1.Set数据结构不能存储重复值
 // //   2。接受数组或者类数组
 // // */
 // // let arr = [],
 // //     set = new Set();

 // // [1, 2, 3, 4, 5, 7, 7].map((x) => {
 // //     set.add(x);
 // // });

 // // console.log(set + "==" + set.length);


 // // // Array
 // // /*
 // //   静态方法：
 // //  1.from():将类数组转换为数组
 // //  2.of():  将一组值转换为数组



 // // */
 // // console.log(Array.of(1, 2, 3));

 // // let arr1 = Array.from(new Set([1, 2, 34, 4]));
 // // console.log(arr1 instanceof Array);
 // // console.log(new Set([1]) == new Array(1));

 // // // 返回键
 // // for (let item of set.keys()) {
 // //     console.log(item);
 // // }


 // // function a(...abc) {
 // //     console.log(abc);
 // // }

 // // a(1, 2, 3);

 // // let [a1, x, b, d] = [1, 2, 4];
 // // console.log(a1, x, b, d);

 // // let strNum="123";
 // // console.log(strNum);

 // // 一种新的数据类型  Symbol()  
 // // 
 // // 
 // // let fnA = (a = 0, b = 9) => {
 // //     console.log(a + b);
 // // }

 // // fnA();

 // // generator
 // // function* fnB() {
 // //     //console.log('a');
 // // }

 // // fnB.next();
 // // function* generateRandoms (max) {
 // //   max = max || 1;

 // //   while (true) {
 // //     let newMax = yield Math.random() * max;
 // //     if (newMax !== undefined) {
 // //       max = newMax;
 // //     }
 // //   }
 // // }

 // // console.log(generateRandoms().next());
 // // console.log(generateRandoms().next());

 // // function* fnAB() {
 // //     yield 1; //暂停执行
 // //     yield 2;
 // //     yield 3;
 // // }
 // // let fnA = fnAB(); //返回一个迭代器对象，有next()
 // // console.log(fnA.next().done + '==' + fnA.next().value); //开始执行
 // // console.log(fnA.next());
 // // console.log(fnA.next());

 // function delay(time, callback) {
 //     setTimeout(function() {
 //         callback("Slept for " + time);
 //     }, time);
 // }

 // function* myDelayedMessages(resume) {
 //     console.log(yield delay(1000, resume));
 //     console.log(yield delay(1200, resume));
 //     console.log(yield delay(2200, resume));
 // }

 // function run(generatorFunction) {
 //     var generatorItr = generatorFunction(resume);

 //     function resume(callbackValue) {
 //         generatorItr.next(callbackValue);
 //     }
 //     generatorItr.next()
 // }

 // run(myDelayedMessages);

 // let a=0;


 // $.ajax({
 //     url:'http://api.17u.cn/hotelservices/HotelPriceHandler.ashx?HotelId=135936&ComeDate=2016-09-05&LeaveDate=2016-09-6&RefIdType=1&Refid=0&elres=1&Plant=1&IsByPromo=1&isOnceShowAll=true&IsShowAllGuarantee=1&pic=1&AlliancePlatId=0&AllianceRefid=0&ResFormat=json&iid=1473074946792&_=1473074946634',
 //     dataType:'jsonp',
 //     jsonp:'jsoncallback', //这里会随机产生callback函数
 //     type:'get',
 //     success(data){
 //         alert(data);
 //     },
 //     error(err){

 //     }

 // });
