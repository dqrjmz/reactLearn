// react文件
import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css/index1.css';
// import $ from 'jquery';
// import css from '../css/index.css';
  /*
    总结：
    1.获取组件属性的值：this.props对象
    2.组件是一个状态机器
    3.组件的声明周期
    4.获取组件状态的值：this.state对象
    5.组件并不是真实dom，而是存在内存当中的数据结构，叫virtual Dom
    6.this.props与this.state的区别
      this.props:用户一旦定义不能改变
      this.state:随时改变的值
    7.组件的生命周期
    8.{}一个花括号，表示这个一段js代码
 */



var Button = React.createClass({
  getInitialState: function() {
    return {
      data:0
    };
  },
  setNewNumber: function() {
    this.setState({data: this.state.data + 1})
  },
  render: function () {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
    }
})
var Content = React.createClass({
  componentWillMount:function() {
      console.log('Component WILL MOUNT!')
  },
  componentDidMount:function() {
       console.log('Component DID MOUNT!')
  },
  componentWillReceiveProps:function(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
  },
  shouldComponentUpdate:function(newProps, newState) {
        return true;
  },
  componentWillUpdate:function(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  },
  componentDidUpdate:function(prevProps, prevState) {
        console.log('Component DID UPDATE!')
  },
  componentWillUnmount:function() {
         console.log('Component WILL UNMOUNT!')
  },

    render: function () {
      return (
        <div>
          <h3>{this.props.myNumber}</h3>
        </div>
      );
    }
});
ReactDOM.render(
   <div>
      <Button />
   </div>,
  document.body
);


// setState设置状态
// let MyComponent=React.createClass({
//   getInitialState(){
//     return {clickNum:0}
//   },
//   handleClick(){
//     // 设置状态对象state
//    /* this.setState((state)=>{
//       return {clickNum:state.clickNum+1}
//     });*/
//      this.setState(()=>{
//       return {clickNum:this.state.clickNum+1}
//     });
//   },
//   render() {
//     return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickNum}</h2>);
//   }
// });
// ReactDOM.render(<MyComponent />,document.body);

// class MyComponent extends React.Component{
//   // 构造函数
//     constructor(props) {
//     // 调用父级
//     super(props);
//     // render方法绑定this
//     this.render = this.render.bind(this); //只能对一层起作用
//     // 组件的状态
//     this.state = {
//       items: this.props.items,
//       disabled: true
//     };
//   }


//   // render
//   render(){
//     let that=this;
//     return (
//         <div className="nav">
//           <ul className="clearfix">
//             {
//               this.props.items.map((el,index)=>{
//                 // (function A(){
//                 //   alert(that);
//                 // })()
//                 return <li>{el}</li>
//               })
//             }
//           </ul>
//         </div>
//       );
//   }
// }

// ReactDOM.render(<MyComponent items={['a','b','d']} />,document.body);
/*
  react router
 */

// 使用 ES6 的转译器，如 babel
// 结构赋值
// import { Router, Route, Link } from 'react-router';
// // 与下面的比较：
// // 不使用 ES6 的转译器
// // var ReactRouter = require('react-router');
// // var Router = ReactRouter.Router;
// // var Route = ReactRouter.Route;
// // var Link = ReactRouter.Link;

// const Users = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>Users</h1>
//         <div className="master">
//           <ul>
//             {/* 在应用中用 Link 去链接路由 */}
//             {this.state.users.map(user => (
//               <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
//             ))}
//           </ul>
//         </div>
//         <div className="detail">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// })

// const User = React.createClass({
//   componentDidMount() {
//     this.setState({
//       // 路由应该通过有用的信息来呈现，例如 URL 的参数
//       user: findUserById(this.props.params.userId)
//     })
//   },

//   render() {
//     return (
//       <div>
//         <h2>{this.state.user.name}</h2>
//       </div>
//     )
//   }
// })

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
// ReactDOM.render((
//   <Router>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//   </Router>
// ), document.body)



/*
  引入第三方react组件
 */
// import DatePicker from 'react-mobile-datepicker';
// class App extends React.Component {

//      state={
//         time: new Date(),
//         isOpen: false,
//     }
//    handleClick = () => {
//         this.setState({ isOpen: true });
//     }

//     handleCancel = () => {
//         this.setState({ isOpen: false });
//     }

//     handleSelect = (time) => {
//         this.setState({ time, isOpen: false });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <a
//                     className="select-btn"
//                     onClick={this.handleClick}>
//                     select time
//                 </a>

//                 <DatePicker
//                     value={this.state.time}
//                     isOpen={this.state.isOpen}
//                     onSelect={this.handleSelect}
//                     onCancel={this.handleCancel} />
//             </div>
//         );
//     }
// }


// ReactDOM.render(<App />, document.getElementById('page'));

/*
    es6写react组件
 */
// class App extends React.Component{

//   constructor(props) {
//     super(props);
//     this.render = this.render.bind(this);
//     this.state = {
//       items: this.props.items,
//       disabled: true
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       disabled: false
//     })
//   }

//   handleClick() {
//     this.setState({
//       items: this.state.items.concat('Item' + this.state.items.length)
//     })
//   }

//   render() {
//     let items=this.state.items;
//     return (
//       <div>
//         <input type="button" onClick={this.handleClick.bind(this)} disabled={this.state.disabled} value="Add Item"  />
//         <ul>
//         {
//           items.map(function(item) {
//             return <li>{item}</li>
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// };

// ReactDOM.render(<App items={['a','b']} />,document.getElementById('page'));


/*
  组件的嵌套
 */
// let ChildCompontent=React.createClass({
//   render(){
//     return (
//         <div>{this.props.title}</div>
//       );
//   }
// });
// let ParCompontent=React.createClass({
//   render(){
//     return (
//       <div >
//       aiyou
//       <ChildCompontent title="jmz" />
//       </div>
//       );
//   }
// });

// ReactDOM.render(<ParCompontent />,document.getElementById('page'));




/*
    组件声明周期will did
 */
// var Hello = React.createClass({

//   // 初始化状态
//   getInitialState: function () {
//     return {
//       opacity: 0
//     };
//   },

//   /*
//       组件已经被插入真实dom，
//       发生改变，会重新触发render函数
//    */ 
//   // 组件将要被插入到真实dom中时候
//   componentWillMount(){
//     console.log('componentWillMount...');
//   },
//   // 组件被插入真实dom之后
//   componentDidMount () {
//     console.log('componentDidMount...');
//   },
//   // 组件的接收一个新属性时
//   componentWillReceiveProps(){
//     console.log('componentWillReceiveProps...');
//   },
//   // 组件的接收到一个新的props或者state时
//   shouldComponentUpdate(){
//     console.log('shouldComponentUpdate...');
//   },
//   // 组件接收到props或者state时，但是没有render
//   componentWillUpdate(){
//     console.log('componentWillUpdate...');
//   },
//   // 组件完成更新后
//   componentDidUpdate(){
//     console.log('componentDidUpdate...');
//   },
//   // 组件从dom中移除
//   componentWillUnMount(){
//     console.log('componentWillUnMount...');
//   },
//   // 组件渲染
//   render () {
//       return (
//         <div>
//           <h3>{this.props.myNumber}</h3>
//         </div>
//         );
//   }
// });


// // react组件写法
// // let Button=React.createClass({
// // });
// // es6写组件方法
// class Button extends React.Component{
//   constructor(props){
//     super(props);
//   }

//   getInitialState(){
//     return {
//       data:0
//     }
//   }


//   handleClick(){
//     this.setState({data:this.state.data+1});
//   }

//   render(){
//     return (
//         <div>
//           <input type="button" value="点击" onClick={this.handleClick} ref="but" />
//           <hello myNumber={this.state.data} ></hello>
//         </div>
//       );
//   }
// }

// // 将组件渲染到真实dom中
// ReactDOM.render(
//   <button />,
//   document.getElementsByTagName('body')[0]
// );

/*
    表单
 */
// let MyComponent=React.createClass({
//   handleChange(event){
//     this.setState({
//       ok:!this.state.ok
//     });
//   },
//   handleFocus(){
//     this.state.vlu=this.refs.textCon.value;
//     this.refs.textCon.value='';
//   },
//   handleBlur(){
//     this.refs.textCon.value=this.state.vlu;
//   },
//   getInitialState(){
//     return {
//       ok:true,
//       vlu:''
//     }
//   },
//   render(){
//     let value=this.state.ok;
//     return (
//         <div>
//           <input ref="textCon" type="type" value="点击" onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
//           <p>{value.toString()}</p>
//           <p></p>
//         </div>
//       );
//   }
// });

// ReactDOM.render(<MyComponent />,document.getElementById('page'));

/*
    this.state:组件状态
 */
// let MyComponent=React.createClass({
//   getInitialState(){
//     return {liked:false}
//   },
//   handleClick(){
//     this.setState({liked: !this.state.liked});
//   },
//   render(){
//     let text=this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//         <div>
//            <p onClick={this.handleClick}>
//         You {text} this. Click to toggle.
//       </p>
//         </div>
//       )
//   }
// });

// ReactDOM.render(<MyComponent/>,document.getElementById('page'));


/*
  ref:获取真实dom
  比如需要获取真实的dom才能获取，输入在文本框中的值
 */
// let MyComponent=React.createClass({
//   handerClick(){
//    this.refs.textName.focus();
//   },
//   getDefaultProps(){
//     return {
//       title:'jmz'
//     }
//   },
//   render(){
//     return (  
//           <div>
//           {this.props.title}
//           <input ref="textName" type="text" />
//           <input value="点击" type="button" onClick={this.handerClick} />
//           </div>
//       )
//   }
// });

// ReactDOM.render(<MyComponent />,document.getElementById('page'));


/*
  
  属性：
    1.propTypes:验证别人使用组件时属性是否符合要求
    2.默认属性值
 */
// let title='fgf'
/*var title = "菜鸟教程";
// var title = 123;
var MyTitle = React.createClass({
  // 设置默认属性
  getDefaultProps(){
    return {
      name:'jmz'
    }
  },
  // 设置属性验证
  propTypes: {
    title: React.PropTypes.string.isRequired,
    name:React.PropTypes.number.isRequired
  },
  //渲染组件 
  render: function() {
     return <h1> {this.props.title}{this.props.name} </h1>;
   }
});
ReactDOM.render(
    <MyTitle title={title} name='jmz' />,
    document.body
);*/
/*
    getDefaultProps:设置组价默认属性
 */
// var MyTitle = React.createClass({
//   // 设置默认属性
//   getDefaultProps() {
//     return {
//       title : 'Hello World'
//     };
//   },
//   render() {
//      return <h1> {this.props.title} </h1>;
//    }
// });

// ReactDOM.render(
//   <MyTitle />,
//   document.getElementById('page')
// );
// 


/*
  @ 组件创建

 let Btn=React.createClass({
  //获取组件的初始化状态，设置
  getInitialState(){
    return {
            enable:false,
            opacity:.4
    }
  },
  handleClick(){
    this.setState({
      enable:!this.state.enable
    });
  },
  render(){
    return (
      <div>
        <input type='text' id='name' name='name' className='a' style={{opacity:this.state.opacity}} />
        <button type='button' name='button' id='button' onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
});

ReactDOM.render(<Btn />,document.getElementById('page'));*/


/*
    this.props.children对象的使用
 */

// var NotesList = React.createClass({
//   render: function() {
//     return (
//       <ol>
//       {
//         React.Children.map(this.props.children, function (child) {
//           return <li>{child}</li>;
//         })
//       }
//       </ol>
//     );
//   }
// });

// ReactDOM.render(
//   <NotesList>
//     <span>hello</span>
//     <span>world</span>
//   </NotesList>,
//   document.documentElement
// );


// class App extends React.Component{
//     constructor() {
//         super();
//     }
//     render() {
//         //JSX here!
//         return (
//           <div className="container">
//             <section className="jumbotron">
//               <h3 className="jumbotron-heading">Search Github Users</h3>
//             </section>
//           </div>
//         )
//     }
// };

// const app = document.createElement('div');
// document.body.appendChild(app);
// ReactDOM.render(<App />, app);


// var RepoList = React.createClass({
//   getInitialState: function() {
//     return {
//       loading: true,
//       error: null,
//       data: null
//     };
//   },

//   componentDidMount() {
//     this.props.promise.then(
//       value => this.setState({loading: false, data: value}),
//       error => this.setState({loading: false, error: error}));
//   },

//   render: function() {
//     if (this.state.loading) {
//       return <span>Loading...</span>;
//     }
//     else if (this.state.error !== null) {
//       return <span>Error: {this.state.error.message}</span>;
//     }
//     else {
//       var repos = this.state.data.items;
//       var repoList = repos.map(function (repo, index) {
//         return (
//           <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
//         );
//       });
//       return (
//         <main>
//           <h1>Most Popular JavaScript Projects in Github</h1>
//           <ol>{repoList}</ol>
//         </main>
//       );
//     }
//   }
// });

// ReactDOM.render(
//   <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
//   document.getElementById('example')
// );
// 
// ReactDOM.render(<h1>标题一</h1>,document.getElementById('box'));

// let arr=['jmz','jay','aiyou'];

// ReactDOM.render(
//     <div>
//       {
//         arr.map((name)=>{
//           return <div>{name}</div>
//         })
//       }
//     </div>,document.getElementById('box'));

// let htmlArrName=[
//       '<h1>jmz</h1>',
//       '<h2>jay</h2>'
//     ];

// ReactDOM.render(
//     <div>
//       {
//         arr.map((name,index)=>{
//           return <div>我是{name}第{index}个</div>
//         })
//       }
//     </div>,document.getElementById('box'));
//   


// let Geek=React.createClass({
//   render(){
//     return <div>{this.props.name}</div>;
//   }
// });

// ReactDOM.render(<Geek name="jmz" />,document.getElementById('box'));