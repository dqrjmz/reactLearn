import React from 'react';
import ReactDOM from 'react-dom';
var SliderNavComponent=React.createClass({
    getInitialState:function(){
        return {
            isOpen:false,
            isShow:false
        };
    },
    componentDidMount:function(){
        window.addEventListener('scroll',this.windHandler);
    },
    windHandler:function(ev){
        var dist=document.body.scrollTop;
        if(dist>300){
           this.setState({
               isOpen:true
           })  
        }else{
            this.setState({
               isOpen:false
           })  
        }
    },
    componentWillUnmount:function(){
        window.addEventListener('scroll',this.windHandler);
    },
    showNav:function(ev){
        this.setState({
               isShow:!this.state.isShow
           })  
    },
    topBack:function(ev){
        document.body.scrollTop=0;
    },
    render:function(){
        return (
            <div>
             <div className={this.state.isOpen?'borderside-nav':'borderside-nav none'}>
                    <div className={this.state.isShow?"nav-retract":'nav-retract none'}>
                        <ul>
                            <li>
                                <span className="bg"></span>
                                <article><a href="#yxtegong">元宵特供</a></article>
                            </li>
                            <li>
                                <span className="bg"></span>
                                <article><a href="#baokuan">错峰爆款</a></article>
                            </li>
                            <li>
                                <span className="bg"></span>
                                <article><a href="#taqing">踏青预售</a></article>
                            </li>
                            <li>
                                <span className="bg"></span>
                                <article><a href="#chaohuiwan">超惠玩</a></article>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-fixed" onClick={this.showNav} >
                        <span className="bg"></span>
                        <article>
                            <img className="nav-triangle" src="http://img1.40017.cn/cn/sl/zzy_zhuanti/gf2016011801/nav-triangle.png" />
                            <span className="fixed-txt">会场导航</span>
                        </article>
                    </div>
                </div>
                 <div onClick={this.topBack} className={this.state.isOpen?'toTop':'toTop none'}>
                    <div className="toTop1"></div>
                    <div className="toTop2"></div>
                </div>
                </div>
        );
    }
});

export {SliderNavComponent};