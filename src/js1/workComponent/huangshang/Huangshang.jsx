import React from 'react';
import ReactDOM from 'react-dom';
import '../css/huanshang.css';

var App = React.createClass({
    render: function () {
        return (
            <div>
                <div className="page">
                    <HeaderComponent />
                    <div className="content">
                        <FirstComponent />
                        <SecondComponent />
                        <ThirdComponent />
                        <FourthComponent />
                        <FifthComponent />
                        <SixComponent />
                        <SventhComponent />
                        <EightComponent />
                    </div>
                    <FootComponent />
                    <FixComponent />
                </div>
                <FooterComponent />
            </div>
        );
    }
});

var HeaderComponent = React.createClass({
    render: function () {
        return (
            <div className="header">
                <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801//header.jpg" alt="" />
            </div>
        );
    }
});

var FirstComponent = React.createClass({
    render: function () {
        return (
            <div className="first">
                <div className="product">
                    <div className="info">
                        <div className="info-warp">
                            <ul>
                                <li className="title">惠游xc黄hghhhj山</li>
                                <li className="note">——为您打造不一样的黄山之旅</li>
                                <li className="list">● 登顶黄山，遍看松石，山上观日出与云海</li>
                                <li className="list">● 古镇闲趣，逛屯溪老街</li>
                                <li className="list">● 赠送登山三宝：地图 雨衣 拐杖</li>
                                <li className="list">● 免费接驳车（天都国际大饭店门前）</li>
                                <li className="price">魅力黄山之行 <span>&yen;<b>1888</b>起/人 </span> </li>
                                <li className="start"><a href="">立即体验>></a></li>
                                <li className="bg"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pro-img">
                        <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/first-mount.jpg" alt="" />
                    </div>
                </div>
            </div>
        );
    }
});

var SecondComponent = React.createClass({
    render: function () {
        return (
            <div className="second" id="second"></div>
        );
    }
});

var ThirdComponent = React.createClass({
    render: function () {
        return (
            <div className="third" id="third">
                <div className="note">
                    <h2>黄山品质游玩•惠玩之旅</h2>
                    <p>3天2晚深度游</p>
                    <p>用三日时光带你游遍多彩黄山 </p>
                </div>
            </div>
        );
    }
});

var FourthComponent = React.createClass({
    getInitialState: function () {
        return {
            currentNum: 0,
            arrData: [
                [
                    { name: '迎客松0', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' },
                    { name: '迎客松0', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' },
                    { name: '迎客松0', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' }
                ],
                [
                    { name: '迎客松1', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' },
                    { name: '迎客松1', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' },
                    { name: '迎客松1', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' }
                ],
                [
                    { name: '迎客松2', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' },
                    { name: '迎客松2', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' },
                    { name: '迎客松2', src: 'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/four-list.jpg' }
                ]
            ],
            arr: ['黄山风景区', '安徽宏村', '屯溪老街']
        }
    },
    tabCon: function (ev, index) {
        ev.preventDefault();
        this.setState({
            currentNum: index
        });
    },
    render: function () {
        var that = this;
        return (
            <div className="fourth" id="fourth">
                <div className="title"></div>
                <div className="tab-con">
                    {
                        this.state.arrData.map(function (item, index) {
                            return (
                                <ul key={index} className={that.state.currentNum == index ? 'clearfix block' : 'clearfix'}>
                                    {
                                        item.map(function (a, i) {
                                            return (
                                                <li key={i}>
                                                    <a href=""><img src={a.src} alt="" />
                                                        <b>{a.name}</b>
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            );
                        })
                    }
                    <div className="nav-tab clearfix">
                        {
                            this.state.arr.map(function (item, index) {
                                return (
                                    <span key={index} onClick={(e) => { that.tabCon(e, index) } }><a className={that.state.currentNum == index ? 'active' : ''} href="#">{item}</a></span>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
});

var FifthComponent = React.createClass({
    getInitialState: function () {
        return {
            currentNum: 0,
            tabArrData: ['黄山山上宾馆', '黄山市区宾馆'],
            arr: [1, 2]
        };
    },
    //组件初始化时， 将所有获取数据，处理数据的逻辑放到这里；
    componentWillMount:function(){
        this.setState({
            currentNum:1
        });
    },
    tabCon: function (ev, index) {
        ev.preventDefault();
        this.setState({
            currentNum: index
        });
    },
    render: function () {
        var that = this;
        return (
            <div className="fifth" id="fifth">
                {
                    this.state.arr.map(function (item, index) {
                        return (
                            <div key={index+'jmz'} className={that.state.currentNum==index?'warpper block':''}>
                                <div id="mSlider-one" className="mSlider">
                                    <div className="mSlider_con">
                                        <ul className="mSlider_ul clearfix">
                                            <li>
                                                <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/pro-hotel.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/pro-hotel.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/pro-hotel.jpg" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tips">
                                    <span className="square"></span>
                                    <ul>
                                        <li className="title">舒适住宿{item}</li>
                                        <li className="sub-title">黄山山上酒店</li>
                                        <li className="hotel">黄山白云宾馆/黄山西海饭 店/北海宾馆</li>
                                        <li className="info">
                                            <p>酒店于旅途的重要性，不亚于空气和水。</p>
                                            <p>黄山深度游，精选1晚山上酒店，精致睡眠赶走旅途的疲惫。晨起，可观山上日出与云海。</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }

                <div className="nav-list clearfix">
                    {
                        this.state.tabArrData.map(function (item, index) {
                            return (
                                <span key={index + 'jmz'} className="one"><a href="#" className={that.state.currentNum == index ? 'active' : ' '} onClick={(e) => { that.tabCon(e, index) } }>{item}</a></span>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

var SixComponent = React.createClass({
    render: function () {
        return (
            <div className="sixth" id="sixth">
                <ul className="clearfix">
                    <li className="one"><img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/H1.jpg" alt="" /></li>
                    <li className="two"><img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/H2.jpg" alt="" /></li>
                    <li className="one"><img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/H3.jpg" alt="" /></li>
                    <li className="two"><img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/H4.jpg" alt="" /></li>
                    <li className="one"><img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/H5.jpg" alt="" /></li>
                </ul>
            </div>
        );
    }
});

var SventhComponent = React.createClass({
    render: function () {
        return (
            <div className="sventh" id="sventh"></div>
        );
    }
});

var EightComponent = React.createClass({
    render: function () {
        return (
            <div className="eighth" id="eighth">
                <div className="title"></div>
                <div className="pro-img block">
                    <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/eight-eat.jpg" alt="" />
                </div>
                <div className="pro-img">
                    <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/eight-eat.jpg" alt="" />
                </div>
                <div className="pro-img">
                    <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016042801/eight-eat.jpg" alt="" />
                </div>
                <div className="nav-tab clearfix">
                    <span><a href="#" className="active">黄山风景区</a></span>
                    <span><a href="#">安徽宏村</a></span>
                    <span><a href="#">屯溪老街</a></span>
                </div>
            </div>
        );
    }
});

var FootComponent = React.createClass({
    render: function () {
        return (
            <div className="footer" id="start">
                <div className="center">
                    <ul>
                        <li className="title">魅力黄山</li>
                        <li className="price">￥<b>1888</b>起</li>
                        <li className="start">
                            <a></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

var FixComponent = React.createClass({
    getInitialState:function(){
        return {
            isOpen:false
        };
    },
    // 组件被加载到真实dom中
    componentDidMount:function(ev){
        var that=this;
        window.addEventListener('scroll',function(ev){
            if(document.body.scrollTop>300){
                that.setState({
                    isOpen:true
                });
            }else{
                that.setState({
                    isOpen:false
                });
            }
        });
    },
    render: function () {
        var obj={};
        if(this.state.isOpen){
            obj={
                display:'block'
            }
        }else{
             obj={
                display:'none'
            }
        }
        return (
            <div className="fix-nav" style={obj}>
                <ul>
                    <li><a href="#second"><span></span>特色</a></li>
                    <li><a href="#third"><span></span>行程</a></li>
                    <li><a href="#fourth"><span></span>玩</a></li>
                    <li><a href="#fifth"><span></span>住</a></li>
                    <li><a href="#sixth"><span></span>吃</a></li>
                    <li><a href="#sventh"><span></span>行</a></li>
                    <li><a href="#eighth"><span></span>购</a></li>
                    <li><a href="#start"><span></span>立即预定</a></li>
                </ul>
            </div>
        );
    }
});

var FooterComponent = React.createClass({
    render: function () {
        return (
            <div className="foot">
                <p>Copyright © 2002-2016 同程网络科技股份有限公司 版权所有</p>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#app'));