import React from 'react';
import ReactDOM from 'react-dom';
// import '../css/bootstrap/bootstrap.css';
// import '../css/bootstrap/test.css';
import $ from 'jquery';
// import bootstrap from 'bootstrap';
console.log($);

class ContainerComponent extends React.Component{
	render(){
		return (
				<div>
					<button className="btn btn-default btn-lg">
						<i className="glyphicon  glyphicon-start"></i>
					</button>
				</div>
			);
	}
}


ReactDOM.render(<ContainerComponent />,document.querySelector('#app'));