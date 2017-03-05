import React from 'react';
import ReactDOM from 'react-dom';
import '../css/bootstrap/bootstrap.css';
import '../less/index.less';


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}

    render() {
        return (
            <div>
            hh
            </div>
        );
    }
}

ReactDOM.render(<MyComponent />, document.querySelector('#app'));