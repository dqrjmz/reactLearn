import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../css/fbdz.css';

var App = React.createClass({
    getInitialState: function () {
        return {
            hstmpropsArrImg: [],
            navArrColor: [],
            dataList: []
        };
    },
    componentWillMount: function () {

    },
    componentDidMount: function () {
        var settings = this.props.soruce,
            that = this;
        $.ajax({
            url: settings.specialtopicdetiallistnew.url,
            type: settings.specialtopicdetiallistnew.type,
            dataType: settings.specialtopicdetiallistnew.dataType,
            data: { IsContainSoldOut: 1, spid: 183 }
        }).then(function (res) {
            if (!res) {
                return;
            }
            // 处理数据
            that.headerData(res.hstmprops);
            that.navArrColor(res.spColor);
            that.dataList(res.list);
        }, function (error) {

        });
    },
    dataList: function (data) {
        this.setState({
            dataList: data
        });
    },
    navArrColor: function (data) {
        this.setState({
            navArrColor: data.split('#')
        });
    },
    headerData: function (data) {
        this.setState({
            hstmpropsArrImg: data.split('#')
        });
    },
    render: function () {
        var that = this;
        return (
            <div className="container" style={{ background: '#' + this.state.hstmpropsArrImg[4] }}>
                <div className="wrapper">
                    <HeaderComponent hstmpropsArrImg={this.state.hstmpropsArrImg} />
                    {
                        this.state.dataList.map(function (el, index) {
                            return (
                                <section key={index} data-mid={el.mid} className="same">
                                    <DataListComponent navArrColor={that.state.navArrColor} navDataList={el} />
                                </section>
                            );
                        })
                    }
                    <FooterComponent hstmpropsArrImg={this.state.hstmpropsArrImg} />
                    <TopBack />
                </div>
                <DownComponent />
            </div>
        );
    }
});

var HeaderComponent = React.createClass({
    render: function () {
        return (
            <header className="head">
                <img src="//pic4.40017.cn/zzy/common/2016/11/24/13/o0anKx.jpg" alt="" />
            </header>
        );
    }
});

var DownComponent = React.createClass({
    render: function () {
        return (
            <div className="down">
                <img src="//img1.40017.cn/cn/sl/zt/0.6.2.4/jmz2016111401/downs.jpg" alt=" " />
            </div>
        );
    }
});

var TopBack = React.createClass({
    render: function () {
        return (
            <span className="top"></span>
        );
    }
});

var FooterComponent = React.createClass({
    render: function () {
        return (
            <footer className="foot">
                <img data-nsrc="//pic4.40017.cn/zzy/common/2016/11/24/13/FvH3Db.jpg" src="//pic4.40017.cn/zzy/common/2016/11/24/13/FvH3Db.jpg.webp"
                    alt="" />
                <i>Copyright©2002-2017同程网络科技股份有限公司 版权所有</i>
            </footer>
        );
    }
});

var DataListComponent = React.createClass({
    render: function () {
        return (
            <div>
                <HTitleComponent hTitleImg={this.props.navDataList.props} />
                <NavList navArrColor={this.props.navArrColor} />
                <SliderComponent sliderData={this.props.navDataList.zhuantiResource[0]} />
                <ConList conData={this.props.navDataList.zhuantiResource[0].mdetail} />
                <MoreComponet navArrColor={this.props.navArrColor} />
            </div>
        );
    }
});

var HTitleComponent = React.createClass({
    render: function () {
        return (
            <h2><img src={this.props.hTitleImg} alt="" /></h2>
        );
    }
});

var MoreComponet = React.createClass({
    render: function () {
        return (
            <div>
                <footer className="foot">
                    <span style={{ background: '#' + this.props.navArrColor[2] }}>选择更多</span>
                </footer>
                <input type="hidden" className="nowIndex" value="1" />
            </div>
        );
    }
});

var NavList = React.createClass({
    render: function () {
        return (
            <nav className="nav">
                <ul className="clearfix" data-index="4">
                    <li className="active" data-childmid="1750" >云南</li>
                    <li data-childmid="1751" >四川</li>
                    <li data-childmid="1752" >重庆</li>
                    <li data-childmid="1753" >陕西</li>
                </ul>
            </nav>
        );
    }
});

var SliderComponent = React.createClass({
    render: function () {
        var json=JSON.parse(this.props.sliderData.props);
        return (
            <article className="mySlider">
                            <div className="slider">
                                <ul>

                                    <li>
                                        <img src={json.tabimages[0].imagepath} alt="" />
                                    </li>
                                </ul>
                            </div>
                            <p className="info">{json.description}</p>
                            <p className="tuijian clearfix">
                                <span className="img"><img src={json.meiwuimages.imagepath} alt="" /></span>
                                <span className="text limit-text-length">{json.meiwuimages.description}</span>
                            </p>
            </article>
        );
    }
});

var ConList = React.createClass({
    render: function () {
        return (
            <article className="Con">
            {
                this.props.conData.map(function(item,index){
                    return (
                         <div className="" key={index}>
                    <a href={"https://m.ly.com/myhouse/house_"+item.mhotelid+".html"} data-hotelid={item.mhotelid}>
                        <dl>
                            <dt className="pro_img">
                                <span className="like"></span>
                                <img src={item.mimage} alt="" />
                                <span className="money"><strong>{item.mprice}</strong>元起</span>
                                <span className="over" ></span>
                            </dt>
                            <dd className="roomType clearfix"><span className="rType">{item.mhotelname}</span></dd>
                            <dd className="roomInfo clearfix"><span className="rInfo">{item.description}</span>
                                <span className="rAddress">{item.mcname}·{item.msname}</span></dd>
                            <dd className="tag clearfix">
                                <p className="tag_list"><span>客栈</span><span>寻觅客栈</span><span>森林氧吧</span></p>
                                <p className="mark"><b className="per">4.4分</b><b className="tipNum">/10评价</b></p>
                            </dd>
                        </dl>
                    </a>
                </div>
                    );
                })
            }
            </article>
        );
    }
});

ReactDOM.render(<App soruce={settings} />, document.querySelector('#app'));