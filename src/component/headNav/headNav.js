import React,{ Component } from 'react';
import {Link } from 'react-router-dom';

import './style/index.css';

export default class extends Component{

    render(){
        return (
            <nav className="head clearfix">
                <div className="logo fl">
                    <Link to="/">首页</Link>
                </div>
                <div className="head-right fr">
                    <ul className="clearfix">
                        <li><Link to="/songlists">分类</Link></li>
                        <li><Link to="/artists">歌手</Link></li>
                        <li><Link to="/listcate">榜单</Link></li>
                        <li><Link to="/ucenter">我的</Link></li>
                        <li className="search-logo"><Link to="/search">搜索</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
