import React,{Component} from "react";
import './style/index.css'

export default class ucenter extends Component{
    render(){
        return (
            <div className="mine">
                <div className="m-head">
                    <img src={require('./img/login.png')} alt=""/>
                    <span className="use-name">十年雪落i</span>
                    <span className="die fr">注销</span>
                </div>
                <div className="m-head">
                    <img src={require('./img/logout.png')} alt=""/>
                    <span className="use-name">点击登录</span>
                    <span className="died fr">注销</span>
                </div>
                <div className="m-content">
                    <h2 className="title">
                        我的收藏
                    </h2>
                    <ul className="clearfix">
                        <li className="fl">
                            <span className="active">
                                歌曲
                            </span>
                        </li>
                        <li className="fl">
                            <span className="">
                                歌曲
                            </span>
                        </li>
                        <li className="fl">
                            <span className="">
                                歌曲
                            </span>
                        </li>
                        <li className="fl">
                            <span className="">
                                歌曲
                            </span>
                        </li>
                    </ul>
                    <div className="tip">
                        请登录后查看收藏
                    </div>
                </div>
            </div>
        )
    }
}