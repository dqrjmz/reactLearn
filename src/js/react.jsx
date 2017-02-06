/*import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)*/

// $('a').my()   $('a')实例化 

/**
 * $.fn==jQuery.prototype
 * this:执行$('#app') 实例【jQuery函数实例】
 * 插件函数中的回调函数中的this指向nation dom
 */
(function ($) {
  $.fn.myPlugin = function (options) {

    // 获取这个dom节点
    console.log(this.css({ width: '20px', height: '20px', backgroundColor: 'red' }));

    const defaultOptions = {
      'location': 'top',
      'background-color': 'red'
    };
    //对这个dom节点做的自定义操作配置
    //第一传递{}对象，为的是不改变defaultOptions，默认值；
    const settings = $.extend({}, defaultOptions, options);

    //每次返回要返回this：当前jquery元素；
    //对这个dom节点做得统一操作；
    return this.each((index, el) => {
      $(el).css('color', 'white');
    });
  }
})(jQuery);

const a = $('a').myPlugin();
console.log(a);

