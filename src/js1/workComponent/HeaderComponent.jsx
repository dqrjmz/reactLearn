import React from 'react';
import ReactDOM from 'react-dom';

import { YuanXiaoComponent } from './YuanXiaoComponent.jsx';
import { BaoKuanComponent } from './BaoKuanComponent.jsx';
import { TaChunComponent } from './TaChunComponent.jsx';
import { SliderNavComponent } from './SliderNavComponent.jsx';
import {FooterComponent} from './FooterComponent.jsx';

var HeaderComponent = React.createClass({
    getInitialState: function () {
        return {
            isOpen: false,
            currentCityNum: 0,
            currentCityName:'港澳台',
            navDataList:['上海', '东海'],
            headerInfo:{
                headerImg:'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/h_lantern.jpg',
                footerImg:'http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/h_route.jpg'
            }
        };
    },
    tabCity: function (ev) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    },
    tabCityList: function (ev, index) {
        this.setState({
            currentCityNum: index,
            currentCityName:this.state.navDataList[index],
            isOpen:false
        });
    },
    render: function () {
        return (
        <div className="outer">
            <header className="header">
                <div className="h_lantren">
                    <img src={this.state.headerInfo.headerImg}  alt="yx_Img" />
                    <nav className="h_nav">
                        <a className="nav_normal" onClick={this.tabCity}>
                            <span>{this.state.currentCityName}</span>
                            <span className={this.state.isOpen ? 'nav_upDwon upDown_active' : 'nav_upDwon'}></span>
                        </a>
                         <ul className={this.state.isOpen ? 'nav_list active' : 'nav_list'}>
                            {
                                this.state.navDataList.map((item, index) => {
                                    return (
                                        <li data-index={index} className={this.state.currentCityNum == index ? "normal nav_active" : 'normal'} onClick={(e)=>{this.tabCityList(e,index)}} key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div>
                    <img src={this.state.headerInfo.footerImg} alt="yx_route" />
                </div>
            </header>
             <div className="content">
                    <YuanXiaoComponent index={this.state.currentCityNum} />
                    <BaoKuanComponent index={this.state.currentCityNum} />
                    <TaChunComponent index={this.state.currentCityNum} />
                </div>
               <SliderNavComponent />
               <FooterComponent />
        </div>
        );
    }
});

var CityListComponent = React.createClass({
    getInitialState: function () {
        return {

        };
    },

    render: function () {
        return (
           <div></div>
        );
    }
});

export { HeaderComponent }