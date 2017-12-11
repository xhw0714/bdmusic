import React,{ Component } from 'react';
import {Link } from 'react-router-dom'

export default class extends Component{

    render(){
        return (
            <nav>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/songlists">分类</Link></li>
                    <li><Link to="/artists">歌手</Link></li>
                    <li><Link to="/listcate">榜单</Link></li>
                    <li><Link to="/ucenter">我的</Link></li>
                    <li><Link to="/search">搜索</Link></li>
                </ul>
            </nav>
        )
    }
}
