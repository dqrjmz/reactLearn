## jquery plugin

```
//这种情况下会报错
const fn=function(){

};
;(function(){
  console.log('hello');
})()

// 用面向对象的方式写插件
;(function($,window,document,undefined){
/**
 * 定义插件
 * @param ele obj 选中的jquery对象
 * @param options obj 对jquery对象做的操作配置
 */
  function MyPlugin(ele,options){
    this.$element=ele;
    this.defaults={
      'color':'white',
      'fontSize':'12px',
      'textDecoration':'none'
    }
    this.options=$.extend({},this.defaults,options);
  }

  MyPlugin.prototype={
    sayHello(){
      return this.$element.css(this.options);
    }
  }

  $.fn.myPlugin=function(options){
    const myPlugin=new MyPlugin(this,options);
    return myPlugin.sayHello();
  }

})(jQuery,window,document);

$('a').myPlugin();


//window等系统变量在插件内部就有了一个局部的引用，可以提高访问速度，会有些许性能的提升
```


```jquery
jQuery.fn==$.fn==jQuery.prototype
jQuery.fn.extend
```