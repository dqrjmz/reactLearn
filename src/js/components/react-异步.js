import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/tab.css';
 
class TabComponent extends React.Component{
	constructor(){
		super();

		this.state={
			index:0,
			tabName:[],
			content:''
		}
	}

	componentDidMount(){
		fetch('../../src/json/tab.json',{
			method:'get'
		}).then((res)=>{
			return res.json();
		}).then((data)=>{
			this.setState({
				index:0,
				tabName:data.tab.tabName,
				content:data.tab.tabContent[0]
			});
		});
	}

	render(){
		return (
				<div className={styles.box}>
					<ul className={styles.nav}>
						{
							this.state.tabName.map((el,index)=>{
								if(index===this.state.index){
									return <li key={index} className={styles.item+' '+styles.active} onClick={(e)=>{this.handler(e,index)}}>{el}</li>;
								}
								return <li key={index} className={styles.item} onClick={(e)=>{this.handler(e,index)}}>{el}</li>;
							})
						}
					</ul>
					<div className={styles.content} style={{display:'block'}}>
						{this.state.content}
					</div>
				</div>
			);
	}

	sendAsync (index){
		this.setState({
				index,
				tabName:this.state.tabName,
				content:'load....'
		});
		setTimeout(()=>{
			fetch(`../../src/json/tab.json?index${index}`,{
				method:'get'
			}).then((res)=>{
				return res.json();
			}).then((data)=>{
				this.setState({
					index,
					tabName:this.state.tabName,
					content:data.tab.tabContent[index]
				});
			});
		},2000);
	}

	handler(e,index){
		this.sendAsync(index);
	}
}

ReactDOM.render(<TabComponent />,document.querySelector('#app'));