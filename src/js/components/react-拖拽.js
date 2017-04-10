import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/cssModules/cssModule-drag.css';

import App from './components/test';

class ComDrag extends React.Component{
	constructor(...args){
		super(...args);

		this.state={
			x:0,
			y:0
		}
	}

	mouseoverHandler(ev){
		let x=ev.pageX-this.state.x,
		    y=ev.pageY-this.state.y;
		 document.onmousemove=(ev)=>{
		 	this.setState({
		 		x:ev.pageX-x,
		 		y:ev.pageY-y
		 	});
		 }

		 document.onmouseup=(ev)=>{
		 	document.onmousemove=null;
		 	document.onmousedown=null;
		 }
	}

	render(){
		return (
			<div className={styles.box} style={{left:this.state.x+'px',top:this.state.y+'px'}} onMouseDown={this.mouseoverHandler.bind(this)}>
			</div>
			);
	}
}

ReactDOM.render(<ComDrag />,document.querySelector('#app'));