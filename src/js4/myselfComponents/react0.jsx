var CounterParent = React.createClass({
    getInitialState: function () {
        return {
            counter: this.props.counter
        };
    },
    add: function (ev) {
        var current = 0;
        if (ev.shiftKey) {
            current = this.state.counter + 10;
        } else {
            current = this.state.counter + 1;
        }

        if (current > 13) {
            return;
        } else {
            this.setState({
                counter: current
            });
        }
    },
    reduce: function (ev) {
        var current = this.state.counter;
        if (current <= 0) {
            return;
        } else {
            this.setState({
                counter: current - 1
            });
        }
    },
    render: function () {
        var styleObj = {
            width: '200px',
            height: '200px',
            background: '#dfdfdf',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: '-100px',
            marginTop: '-100px'
        };
       
        

        return (
            <div style={styleObj}>
                <Counter counter={this.state.counter} />
                <AddBtnComponent addClickHandler={this.add} flag="add" />
                <AddBtnComponent addClickHandler={this.reduce} flag="reduce" />
            </div>
        );
    }
});

var Counter = React.createClass({

    render: function () {
        var styleObj = {
            textAlign: 'center',
            paddingTop: '40px',
            color: '#rerere'
        };
        return (
            <div style={styleObj}>
                {this.props.counter}次
            </div>
        );
    }
});

var AddBtnComponent=React.createClass({

    render:function(){
        var styleBtn1 = {
            width: '50px',
            height: '30px',
            background: 'blue',
            border: 'none',
            position: 'absolute',
            bottom: '0px',
            left: '50%',
            marginRight: '-60px',
            color: '#fff',
            cursor: 'pointer'
        };
         var styleBtn0 = {
            width: '50px',
            height: '30px',
            background: 'blue',
            border: 'none',
            position: 'absolute',
            bottom: '0px',
            left: '50%',
            marginLeft: '-60px',
            color: '#fff',
            cursor: 'pointer'
        };
        var h='';
        if(this.props.flag=='add'){
            h=<button onClick={this.props.addClickHandler} style={styleBtn1} type="button" >+</button>
        }else if(this.props.flag=='reduce'){
             h=<button onClick={this.props.addClickHandler} style={styleBtn0} type="button" >-</button>
        }
        return (
            <span>
           {h}
           </span>
        );
    }
});



ReactDOM.render(<CounterParent counter={1} />, document.querySelector('#app'));