
var App = React.createClass({

    render: function () {
        var styleObj = {
            float:'left',
            width:'200px',
            height:'20px',
            lineHeight:'20px',
            listStyle:'none',
            border:'1px solid #333',
            textAlign:'center'
        };
        return (
            <div>
                <h1>simple spa</h1>
                <ul >
                    <li style={styleObj}>a</li>
                    <li style={styleObj}>b</li>
                    <li style={styleObj}>c</li>
                    <li style={styleObj}>d</li>
                </ul>
            </div>
        );
    }
});

var target = document.querySelector('#app');
ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
        </ReactRouter.Route>
    </ReactRouter.Router>, target);