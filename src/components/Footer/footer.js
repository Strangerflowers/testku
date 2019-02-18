
import React from 'react';
import { NavLink} from "react-router-dom";
import '../../styles/footer.less';
class Footer extends React.Component{
    constructor(){
        super();
        this.state={
            footerList: [
                { title: '首页', pic: 'iconfont icon-home', path: '/home' },
                { title: '分类', pic: 'iconfont icon-list', path: '/classify' },
                { title: '消息', pic: 'iconfont icon-news', path: '/news' },
                { title: '购物车', pic: 'iconfont icon-cart', path: '/cart' },
                { title: '账户中心', pic: 'iconfont icon-UserSettings', path: '/mine' },

            ]
        }
    }
    render(){
        return (
            <div className="footer">
                <ul className="footermenuNav">
                {
                    this.state.footerList.map((item,idx)=>{
                        return  <NavLink to={item.path} key={idx} activeStyle={{color:'#58bc58'}}>
                                    <li key={item.title}>
                                        <div className={item.pic}></div> <span className="lispan">{item.title}</span>
                                    </li> 
                                </NavLink>
                    })
                }
                   
                </ul> 
            </div>
        )
    }
}


export default Footer