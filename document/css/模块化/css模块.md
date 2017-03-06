## css模块

### 概念
>css module就是所有类名都只有局部作用域的css文件

### 作用
- 将css代码模块化开来

### 使用方式
- 需要配合构建工具使用
![css module开启使用](../../images/cssmodule.css)
```
//style.css
.base {
    position:absolute;
    left:0;
    top:0;
}

import style from 'style.css';
element.innerHTML=`<div class=${style.base}></div>`;

/* 定义变量 */
@value a: #ff0000;
@value b: #0c77f8;

.base {
    background:a;
    transform: translate(-50%, 0)
}

.title{
    opacity: .6;
}

/* 全局样式 */
:global(.title){
    width: 100px;
    height: 100px;
};



:global{
    .link{

    }
    .active{

    }
};

/* 局部样式 */
:local(.classname){
    composes: base title; /*composes 继承baes 类*/
    composes: otherClass from './cssModule0.css'; /*composes 继承其他模块的样式*/
    color: b;
};


:local{
    .link{

    }
    .active{
        
    }
};

.content :global(.a) .b .b .c{

}


```


### css module原理（产生局部作用域）
- 定义一个独一无二的class


### css module中的规则
- 全局类
    + :global(.title){}
- 局部类
    + :local(.className){}


### css代码要求
- 可维护性高
- 复用代码
- 性能
- 命名冲突

### css中类名命名规范
- block :代表高级别的抽象，或者组件
- element :代表这个抽象的具象
- modifier :这个具象的一部分 
