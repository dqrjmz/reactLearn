import React from 'react';
import ReactDOM from 'react-dom';
// 主题
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// touch事件的模拟
import injectTapEventPlugin from 'react-tap-event-plugin';

// import MyAwesomeReactComponent from './app.jsx';
// RaisedButton组件
import RaisedButton from 'material-ui/RaisedButton';
 

 
 
const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.body
);