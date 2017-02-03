import React from 'react';
import ReactDOM from 'react-dom';

var YuanXiaoComponent = React.createClass({
    getInitialState: function () {
        return {
            hotelInfoList: [
                {
                    "mid": 2281,
                    "mhotelid": 123187,
                    "mhotelname": "泰州碧桂园凤凰温泉酒店",
                    "msort": 0,
                    "mcid": 228,
                    "mpid": 16,
                    "msid": 3848,
                    "mpname": "江苏",
                    "mcname": "泰州",
                    "msname": "海陵区",
                    "mroomid": 0,
                    "mroomname": null,
                    "mpolicyid": 0,
                    "mroompolicy": null,
                    "mimage": "http://pic4.40017.cn/zzy/rimage/2016/10/10/18/jF86xB.jpg",
                    "mprice": 299,
                    "mclass": "豪华型",
                    "msiteName": "新春出游",
                    "description": "泰州碧桂园凤凰温泉酒店位于泰州海陵区北泰渔路，近东风路与森园路北侧，可方便前往泰州市老街、凤城河、溱湖湿地公园、千垛菜花等景区。#2",
                    "DesHotelId": "YkZ97onagQk%3d",
                    "maddress": "北泰渔路888号",
                    "mroomtype": "酒店"
                },
                {
                    "mid": 2281,
                    "mhotelid": 123187,
                    "mhotelname": "泰州碧桂园凤凰温泉酒店",
                    "msort": 0,
                    "mcid": 228,
                    "mpid": 16,
                    "msid": 3848,
                    "mpname": "江苏",
                    "mcname": "泰州",
                    "msname": "海陵区",
                    "mroomid": 0,
                    "mroomname": null,
                    "mpolicyid": 0,
                    "mroompolicy": null,
                    "mimage": "http://pic4.40017.cn/zzy/rimage/2016/10/10/18/jF86xB.jpg",
                    "mprice": 299,
                    "mclass": "豪华型",
                    "msiteName": "新春出游",
                    "description": "泰州碧桂园凤凰温泉酒店位于泰州海陵区北泰渔路，近东风路与森园路北侧，可方便前往泰州市老街、凤城河、溱湖湿地公园、千垛菜花等景区。#2",
                    "DesHotelId": "YkZ97onagQk%3d",
                    "maddress": "北泰渔路888号",
                    "mroomtype": "酒店"
                },
                {
                    "mid": 2281,
                    "mhotelid": 123187,
                    "mhotelname": "泰州碧桂园凤凰温泉酒店",
                    "msort": 0,
                    "mcid": 228,
                    "mpid": 16,
                    "msid": 3848,
                    "mpname": "江苏",
                    "mcname": "泰州",
                    "msname": "海陵区",
                    "mroomid": 0,
                    "mroomname": null,
                    "mpolicyid": 0,
                    "mroompolicy": null,
                    "mimage": "http://pic4.40017.cn/zzy/rimage/2016/10/10/18/jF86xB.jpg",
                    "mprice": 299,
                    "mclass": "豪华型",
                    "msiteName": "新春出游",
                    "description": "泰州碧桂园凤凰温泉酒店位于泰州海陵区北泰渔路，近东风路与森园路北侧，可方便前往泰州市老街、凤城河、溱湖湿地公园、千垛菜花等景区。#2",
                    "DesHotelId": "YkZ97onagQk%3d",
                    "maddress": "北泰渔路888号",
                    "mroomtype": "酒店"
                },
                {
                    "mid": 2281,
                    "mhotelid": 123187,
                    "mhotelname": "泰州碧桂园凤凰温泉酒店",
                    "msort": 0,
                    "mcid": 228,
                    "mpid": 16,
                    "msid": 3848,
                    "mpname": "江苏",
                    "mcname": "泰州",
                    "msname": "海陵区",
                    "mroomid": 0,
                    "mroomname": null,
                    "mpolicyid": 0,
                    "mroompolicy": null,
                    "mimage": "http://pic4.40017.cn/zzy/rimage/2016/10/10/18/jF86xB.jpg",
                    "mprice": 299,
                    "mclass": "豪华型",
                    "msiteName": "新春出游",
                    "description": "泰州碧桂园凤凰温泉酒店位于泰州海陵区北泰渔路，近东风路与森园路北侧，可方便前往泰州市老街、凤城河、溱湖湿地公园、千垛菜花等景区。#2",
                    "DesHotelId": "YkZ97onagQk%3d",
                    "maddress": "北泰渔路888号",
                    "mroomtype": "酒店"
                }
            ],
            isOpen: false
        };
    },
    showMore: function (ev) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    },
    render: function () {
        var a = '';
        if (this.state.hotelInfoList.length > 3) {
            if (!this.state.isOpen) {
                a = <div className="c_more">
                    <a href="javascript:void(0)" onClick={this.showMore}>
                        <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/c_more.jpg" alt="title" />
                    </a>
                </div>
            } else {
                a = ''
            }
        } else {
            a = ''
        }
        return (
            <div className="c_yxtg" id="yxtegong">
                <h2>
                    <img src="http://img1.40017.cn/cn/sl/zzy_zhuanti/jmz2016020101/yxtg_head.jpg" alt="yx_title" />
                </h2>
                <div className="c_place ">
                    <ul>
                        {
                            this.state.hotelInfoList.map((item, index) => {
                                 var h='';
                                if (!this.state.isOpen) {
                                    if (index < 3) {
                                         h = <li key={index}>
                                                <a href={'http://m.ly.com/hotel/jiudian_' + item.mhotelid + '.html'} className="c_placeImg">
                                                    <img src={item.mimage} alt="place" />
                                                    <p className="c_posCity"><span>{item.mpname}</span>|<span>{item.mcname}</span></p>
                                                    <p className="c_tip">{item.description}</p>
                                                    <p className="c_price"><span>￥<b>{item.mprice}</b>起</span><span className="c_discount">立即抢购</span></p>
                                                </a>
                                            </li>
                                    }
                                }else{
                                     h = <li key={index}>
                                            <a href={'http://m.ly.com/hotel/jiudian_' + item.mhotelid + '.html'} className="c_placeImg">
                                                <img src={item.mimage} alt="place" />
                                                <p className="c_posCity"><span>{item.mpname}</span>|<span>{item.mcname}</span></p>
                                                <p className="c_tip">{item.description}</p>
                                                <p className="c_price"><span>￥<b>{item.mprice}</b>起</span><span className="c_discount">立即抢购</span></p>
                                            </a>
                                    </li>
                                }
                                return h;
                            })
                        }
                    </ul>
                    {a}
                </div>
            </div>
        );
    }
});

export { YuanXiaoComponent }