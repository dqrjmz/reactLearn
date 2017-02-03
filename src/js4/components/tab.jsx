import '../../css/tab.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// 内容组件
class Tab extends Component{
	render(){
		return <div className="tabCon">{this.props.children}</div>
	}
}

class TabControl extends Component{
	constructor(props){
		super(props);
		this.state={
			currentIndex:0
		}
	}

	tabChangeClick(){
	this.setState({currentIndex:index});
	}

	getItemIndex(index){
	return	index==this.state.currentIndex?'tabText active':'tabText';
	}
		
	getItemConIndex(index){
		return index==this.state.currentIndex?'tabCon1 active':'tabCon1';
	}

	render(){
		let len=this.props.children.length;
		return (
			<div>
			<nav className="navBox">
				<ul className="clearfix">
				{
					React.Children.map(this.props.children,(el,index)=>{
						return (
							<li className="navTab" data-len={len} onClick={ () => { this.setState({currentIndex : index}) } }><span className={this.getItemIndex(index)}>{el.props.name}</span></li>
						)
					})
				}
				</ul>
			</nav>
			<div className="conList">
			{
					React.Children.map(this.props.children,(el,index)=>{
						return (
								<div className={this.getItemConIndex(index)}>{el}</div>
						)
					})
			}
			</div>
			</div>
		)
	}
}

class TabBox extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (	
			<div className="container">
				<TabControl>
						<Tab name="first">
							<div>first</div>
						</Tab>
						<Tab name="second">
							<div>second</div>
						</Tab>
						<Tab name="third">
							<div>third</div>
						</Tab>
				</TabControl>
			</div>
		);
	}
}

ReactDOM.render(<TabBox />,document.querySelector('#root'));