import React from 'react';
import ReactDOM from 'react-dom';

var FooterComponent=React.createClass({
    render:function(){
        return (
            <footer className="footer" id="chaohuiwan">
                    <h2>
                        <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/f_title.jpg" alt="" />
                    </h2>
                    <div className="f_adv">
                        <a href="http://www.ly.com/zhuanti/sanyanuandong-zizhuyou" className="f_hotel">
                            <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/jinpinhotel.png" alt="精品酒店" />
                        </a>
                        <a href="http://qianggou.ly.com/hotel/?wvc1=1&wvc2=1&17u=1&cid=tcwvcid" className="f_sanya">
                            <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/f_rightImg.jpg" alt="三亚暖冬" />
                        </a>
                    </div>
                </footer>
        );
    }
});

export {FooterComponent}