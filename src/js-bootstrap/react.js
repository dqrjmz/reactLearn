import React from 'react';
import ReactDOM from 'react-dom';
import '../css/react-bootstrap/bootstrap.min.css';
// import '../css/react-bootstrap/bootstrap-theme.min.css';
import '../less/index.less';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
        return (
            <div>
				<Alert height="200"/>
				<Button bsStyle="primary">主要</Button>
				<Button bsStyle="success">成功</Button>
			</div>
        )
    }

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {}

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}


}

ReactDOM.render(<MyComponent />, document.querySelector('#app'));