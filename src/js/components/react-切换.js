import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/tab.css';

export default class TabComponent extends React.Component{
	constructor(){
		super();

		this.state={
			index:0,
			tabName:['tab1','tab2','tab3'],
			content:[1,2,3]
		}
	}
	render(){
		return (
				<div className={styles.box}>
					<ul className={styles.nav}>
						{
							this.state.tabName.map((el,index)=>{
								if(index===this.state.index){
									return <li key={index} className={styles.item+' '+styles.active} onMouseOver={(e)=>{this.handler(e,index)}}>{el}</li>;
								}
								return <li key={index} className={styles.item} onMouseOver={(e)=>{this.handler(e,index)}}>{el}</li>;
							})
						}
					</ul>
					{
						this.state.content.map((el,index)=>{
							if(index===this.state.index){
								return <div key={index} className={styles.content +' '+styles.block}>{el}</div>;
							}
							return <div key={index} className={styles.content}>{el}</div>;
						})
					}
				</div>
			);
	}

	handler(e,index){
		switch(index){
			case 0:
				this.setState({index:0});
			break;
			case 1:
				this.setState({index:1});
			break;
			case 2:
				this.setState({index:2});
			break;
			default:;
		}
	}
}

// ReactDOM.render(<TabComponent />,document.querySelector('#app'));