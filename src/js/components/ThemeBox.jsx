/*
 * react 组件开发页面
 *
 * 组件划分
 * 1.
 * 2.数据列表组件
 */

import '../../css/index';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Tool from '../lib/platform';

// 列表组件
 class ThemeList extends React.Component {
    constructor(porps) {
        super(porps);


        this.state = {
            data: []
        };

        this.loadAajxData=this.loadAajxData.bind(this);
        this.render = this.render.bind(this);
    }

    // 当组件插入DOM后发送ajax获取数据，异步的实现方式【好多种】
    loadAajxData(){
        let that=this;
        $.ajax({
            url:'../data/data.json',
            dataType:'json',
            type:'get',
            data:{},
            asnyc:true,
            success(data){
                that.setState({data});
            }
        });
    }

    componentDidMount(){
        this.loadAajxData();
    }

    render() {

    		let liList=	this.state.data.map((el)=>{
			    		return (
			    				<li>
			                 <a className="track-router-list" data-lineid={el.LineId}> 
			                 		<span className="place-name">{el.CityName}</span> 
			                 		<img src={el.ImageUrl.replace('http:','')} alt="" />
			                    <p className="place-info limit-text-length">{el.MainTitle}</p>
			                    <p className="place-price">¥<b>{el.PlatformPrice[0].AmountDirect}</b>起
			                     	<span><i className="day">{el.Days}</i>天<i className="night">{el.Days-1}</i>晚</span>
			                     </p>
			                    <p className="place-act">马上抢购<b></b></p>
			                  </a>
			             </li>
			    			);
	    		});
	      return ( 
            <ul className="clearfix">
	     	     {liList}
             </ul>
      	   );
    }
  }

// 列表容器组件
class ThemeBox extends React.Component{
	constructor(porps){
		super(porps);

		this.state={

		};
	}

	render(){
		return (
			<div className="theme same">
                <div className="same">
                    	<ThemeList />
                </div>
            </div>
		);
	}
}



export {ThemeBox};

