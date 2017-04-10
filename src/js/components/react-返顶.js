import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/backTop.css';

// class MyPage extends React.Component{
// 	render(){	
// 		return (
// 				<div className={styles.page}>
// 					<TopComponent />
// 				</div>
// 			);
// 	}
// }

export default class TopComponent extends React.Component{
	render(){
		return (
			<div className={styles.top} onClick={this.backhandler.bind(this)}></div>
		);
	}

	backhandler(ev){
		let timer=null;

		timer=setInterval(()=>{
			let t=document.documentElement.scrollTop || document.body.scrollTop;
			let speed=t/5;

			if(t>0){
				document.body.scrollTop-=speed;	
			}else{
				document.body.scrollTop=0;
				clearInterval(timer);
			}
		},20);
	}
}


// ReactDOM.render(<MyPage />,document.querySelector('#app'));