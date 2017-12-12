import React,{Component} from "react";

import './style/index.css';

export default class songlists extends Component{
    render(){
        return (
            <div className="songlist">
                <div className="songlist-c">
                    <h2 className="title">
                        热门分类
                    </h2>
                    <ul className="hot-list clearfix">
                        <li className="big fl">
                            <span className="text">流行</span>
                        </li>
                        <li className="small-list fr">
                            <ul className="fl">
                                <li className="small fl">
                                    <span  className="text">流行</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text">流行</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text">流行</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text">流行</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="songlist-box">
                    <h2 className="title">
                        流行音乐
                    </h2>
                    <ul className="songlist-list clearfix">
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说,说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹</div>
                        </li>
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说</div>
                        </li>
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说</div>
                        </li>
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}