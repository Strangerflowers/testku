import React from 'react';
import '../../styles/header.less';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
           
            <div className="searchbar">
                <div className="title">
                    <img src="http://static.yiwugou.com/mobile/assets/text_logo.png"
                        />
                </div>
                <div className="search" >
                    <span className="text">请输入关键字</span>
                    <i className="iconfont icon-search"></i>
                </div>
            </div>
               
                )
            }
        }
        
export default Header;