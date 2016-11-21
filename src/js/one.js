import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import './main.js'


// import UnlimitedMarquee from 'ks-unlimited-marquee';

// class Demo extends Component {
//   render() {
//     const data = [
//       { url: 'https://github.com/ttop5/blog/issues/1', desc: '1111111111111111111111111111111111' },
//       { url: 'https://github.com/ttop5/blog/issues/2', desc: '2222222222222222222222222222222222' },
//       { url: 'https://github.com/ttop5/blog/issues/3', desc: '3333333333333333333333333333333333' },
//       { url: 'https://github.com/ttop5/blog/issues/4', desc: '4444444444444444444444444444444444' },
//       { url: 'https://github.com/ttop5/blog/issues/5', desc: '5555555555555555555555555555555555' },
//       { url: 'https://github.com/ttop5/blog/issues/6', desc: '6666666666666666666666666666666666' },
//       { url: 'https://github.com/ttop5/blog/issues/7', desc: '7777777777777777777777777777777777' },
//       { url: 'https://github.com/ttop5/blog/issues/8', desc: '8888888888888888888888888888888888' },
//       { url: 'https://github.com/ttop5/blog/issues/9', desc: '9999999999999999999999999999999999' },
//     ];
//     const height = '120px';
//     const width = '250px';

//     return (
//       <div>
//         <UnlimitedMarquee
//           data={data}
//           height={height}
//           width={width}
//         />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Demo/>, document.querySelector('#root'));
// //导航ul
// class NavULBoxCompontent extends Component{
// 	constructor(props){
// 		super(props);

// 		this.state={
// 			navLiData:this.props.navLiData,
// 			whichItem:this.props.item
// 		};
// 	}

// 	clickHandle(index){
// 		alert(index);
// 		this.setState({whichItem:index});
// 	}

// 	render(){
// 		let that=this;
// 		return (
// 			<ul className="clearfix nav-con" data-index={this.state.navLiData.length}>
// 				{
// 					 this.state.navLiData.map((el,index)=>{
// 						let className=``;
// 						if(this.state.whichItem==index){
// 							className='active'
// 						}
// 						return <li onClick={this.clickHandle.bind(this,index)} className={className} key={index}><span className="nav-list">	{el}
// 						     </span>
// 						 </li>
// 					})
// 				}
// 			</ul>
// 		);
// 	}
// }

// // 导航div
// class NavBoxCompontent extends Component{
// 	constructor(props){
// 		super(props);

// 		this.state={
// 			navLiData:this.props.navLiData.navLiData
// 		}
// 	}

// 	render(){
// 		return (
// 			<div className="navBox">
// 				<NavULBoxCompontent item="0" navLiData={this.state.navLiData} />
// 			</div>
// 		);
// 	}
// }

// let navData={
// 	navLiData:[
// 	1,3,4,5
// 	]
// }


// ReactDOM.render(<NavBoxCompontent navLiData={navData} />,document.querySelector('#root'));








// // // 创建一个react组件
// // class ListCompontent extends Component{
// // 	 constructor(props){
// // 		super(props);
// // 	}
// // 	render(){
// // 		return (
// // 				<div>{this.props.mprops}</div>
// // 			);
// // 	}
// // }

// // class ComBox extends Component{
// // 	constructor(props){
// // 		super(props);
// // 		this.state={
// // 			one:'123',
// // 			name:this.props.mprops.name,
// // 			age:this.props.mprops.age
// // 		}
// // 	}
// // 	render(){
// // 		return (
// // 			<div className={this.state.one}>
// // 				<ListCompontent mprops={this.state.one} />
// // 				{this.state.name+this.state.age}
// // 			</div>
// // 		);
// // 	}
// // }

// // const person={
// // 	name:'jmz',
// // 	age:21
// // }

// // ReactDOM.render(<ComBox mprops={person} />,document.querySelector('#root'));