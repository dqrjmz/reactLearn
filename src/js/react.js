import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/react.css';
// import $ from 'script!zepto';

// console.log($('#root'));

// box component
class BoxComponent extends Component {
    constructor(props) {
        super(props);
        let {header,baoKuan,hotHotel}=this.stateInit();
        // 默认数据状态初始化
        this.state = {
            header,
            baoKuan,
            hotHotel
        };
    }

    /**
     * 组件状态的初始化
     */
    stateInit() {
        let that = this,
            header=null,
            baoKuan=null,
            hotHotel=null;
        $.ajax({
            url: this.props.data.url,
            type: this.props.data.type,
            dataType: this.props.data.dataType,
            async:false,
            success(data) {
                if (!data || !data.list) return;
                let listCon = data.list;
                
                listCon.map((el, index) => {
                    switch (index) {
                        // header数据
                        case 0:
                             header=el;
                            break;
                            // 爆款
                        case 1:
                             baoKuan=el;
                            break;
                            // 热门
                        case 2:
                             hotHotel=el;
                            break;
                        default:
                            console.log('无此模块！');
                    }
                });
            },
            error(xhr, err, stutas) {
                console.log(stutas);
            }
        });

         return {
                header,baoKuan,hotHotel
            }
    }

    componentDidMount() {

    }

    render() {
        return ( < div className = "box" >
            < HeaderComponent headerData = { this.state.header }
            />  < BaoKuanComponent baoKuanData = { this.state.baoKuan } / > < HotHotelComponent hotHotelData = { this.state.hotHotel }
            / > < /div >
        );
    }
}

// header component
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( < header className = "head" >
            < img src = { this.props.headerData.headPic }
            / > < /header >
        );
    }
}

// baokuan component
class BaoKuanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: [],
            conList:[]
        }
        this.initData();
    }

    initData(){
        for(let item of  this.props.baoKuanData.zhuantiResource){
           this.state.navTitle.push(item.mname);
           this.state.conList.push(item.mdetail);
        }
    }



    componentDidMount() {
        
    }

    render() {
        return ( 
            <section className = "baokuan">
                < h2 > < img src = {this.props.baoKuanData.headPic} alt = "" / > < /h2> 
                <BaoKuanControlComponent navTitle={this.state.navTitle} conList={this.state.conList}>
                    {
                        this.state.conList.map((el,index)=>{
                          return  <BaoKuanListComponent mdetail={el} />
                        })
                    }
                </BaoKuanControlComponent>
            </section>
        );
    }
}

// bakuan nav component
class BaoKuanControlComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            navTitle:this.props.navTitle,
            conList:this.props.conList,
            currentIndex:0
        }
    }

    clickHandle(){

    }

    getItemCurrent(index){
        return index==this.state.currentIndex?'bk-content active':'bk-content';
    }

    render() {
        return ( 
            <div>
                <nav className = "bk-nav" >
                    < ul className = "clearfix" >
                        {
                            this.state.navTitle.map((el,index)=>{
                                return <li className = {index===this.state.currentIndex?'active':''} onClick={()=>{this.setState({currentIndex:index})}}> {el} < /li>
                            })
                        }
                    < /ul> 
                </nav>
                <div>   
                    {
                        React.Children.map(this.props.children,(el,index)=>{
                            return (
                                <article className ={this.getItemCurrent(index)} >
                                     {this.props.children}
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


// baokuan list component
class BaoKuanListComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.mdetail);
    }
    render() {
        return ( 
            this.props.mdetail.map((el,index)=>{
                <a href = "" data-hotelid = "147274" >
                    <dl >
                        <dt className = "pro_img">
                            <span className = "pos_city"> {el.mpname} </span> 
                            <span className = "eleven_logo"> < /span > 
                            <span className = "pro_title"> {el.mhotelname}</span> 
                            <img src ={el.mimage} alt = "" /> 
                        </dt> 
                        <dd className="info"> 
                        <span className="pro_description"> 
                            <b className="limit-text-length"></b> 
                        </span > 
                        <span className ="pro_price">
                        <p> & yen; <strong> 1999 </strong><b>起</b> </p> </span> </dd> 
                    </dl>
                </a>
            })
        );
    }
}

// hot hotel component
class HotHotelComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < section className = "hot-hotel" >
            < h2 > < img src = "../images/hot_hotel.jpg"
            alt = "" / > < /h2> < HotHotelNavComponent / >
            < HotHotelContentComponent / >
            < /section>
        )
    }
}

// hot hotel nav component
class HotHotelNavComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < div className = "nav" >
            < nav >
            < b > < /b> < span className = "active" > 江苏 < /span > < span > 浙江 < /span> < span > 广东 < /span > < div className = "otherCity clearfix" >
            < a > 浙江 < /a> < a > 浙江 < /a > < a > 浙江 < /a> < a > 浙江 < /a > < a > 浙江 < /a> < a > 浙江 < /a > < a > 浙江 < /a> < /div > < /nav> < /div >
        )
    }
}

// hot hotel content component
class HotHotelContentComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < article className = "hh-content clearfix" >
            < HotHotelListComponent / >
            < /article> 
        );
    }
}

// hot hotel list component
class HotHotelListComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( < a href = "" >
            < dl >
            < dt className = "pro_img" >
            < span className = "cityPos" > 上海 < /span> < img src = "../images / pro_img.jpg "
            alt = "" / >
            < /dt> < dd className = "pro_info limit-text-length" > 巴厘岛5日4晚自由行， 全程 5 星酒店， 附赠烛光5星酒店， 附赠烛光晚餐巴厘岛5日4晚自由行， 全程餐巴厘岛5日4晚自由行， 全程 5 星酒店， 附赠烛光晚餐 < /dd > < dd className = "pro_price" > & yen; < strong > 3999 < /strong>起</dd >
            < /dl> < /a >
        );
    }
}


//配置页面信息
let setting = {
    "url": "../data/data.json",
    "type": "get",
    "dataType": "json"
};

ReactDOM.render( < BoxComponent data = { setting }
        / > , document.querySelector('#root'));
