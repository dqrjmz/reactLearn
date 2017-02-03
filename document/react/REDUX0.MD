#redux

##几个概念

1. store:保存数据的地方；
- 使用creatStore()方法生成store对象；
```
import {createStore} from 'redux';
const store=createStore(fn)
```
- store.dispatch(params):是view发出action的唯一方式,去改变state,params：是一个action
    1. dispatch可以知道reducer函数，做法是在创建store时候，将reducer传到createStore方法中；
- store.subscribe():设置监听函数，一旦state变化，就自动执行这个函数；
```
let unsubscribe=store.subscribe(listen); 返回解除对象
unsubscribe() 解除state监听
```


2. state:某个时点的数据集合
```
import {createStore} from 'redux'
const store=createStore(fn);
store.getState()
```

3. action:view发出的通知，表示state要改变
- 改变state的唯一方式就是action
```
{
    type:'ADD_TODO',
    content:'text'
}
```

4. action creator
- 因为view要多少种信息，就要有多少种action，所以action会很多，所以，使用函数来生成aciton
```
function(type,text){
    return {
    type:type,
    text:text}
}
```

5. reducer:接受到action后，改变state,并给出一个新的state
- 这是一种state计算的过程；
```
const reducer=function(state,action){return new state}

const reducer=function(state,action){
    switch(action.type){
        case '';break;
        default:;
    }
}
```

6. 纯函数
- 同样的输入，得到同样的输出，reducer函数是纯函数，为的是保证同样的state得到同样的view



##总结
- redux的工作流程(redux flow)
1. 用户从view发出一个actin
    - store.dispatch(action);
2. store调用reducer,处理当前state，返回新的state
3. state变化之后，调用监听函数 store.subscribe(listener),重新渲染view;
4. 使用redux将所有组件的状态维护到底层组件，通过props来进行状态分发；
5. 只有一个单一的 store 和一个根级的 reduce 函数（reducer）
