var App = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        var styleObj = {
            width: '200px',
            height: '200px',
            background: this.props.colors,
            borderRadius: '100%',
            display:'inline-block'
        };
        return (
            <div style={styleObj}></div>
        );
    }
});

var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
              "#85FFC7", "#297373", "#FF8552", "#A40E4C"],
    reactComp=[];

for(var i=0;i<colors.length;i++){
    reactComp.push(<App key={i} colors={colors[i]} />);
}

ReactDOM.render(<div>
{reactComp}
</div>,document.querySelector('#app'));