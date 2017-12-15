import React,{Component} from "react";
import './style/index.css'
import {Link } from 'react-router-dom';

//<PlayBig/>
export default class ucenter extends Component{
    constructor(){
        super();

        let data = this.getLocation() || {isLogin:false,useName:'点击登录'};

        this.state = data

        this.getLocation = this.getLocation.bind(this);
        this.loginClickHandel = this.loginClickHandel.bind(this);
        this.dieClickHandel = this.dieClickHandel.bind(this);
    }
    //登录的点击事件
    loginClickHandel(){
        if(!this.state.isLogin){
            this.jumpRoute('/login')
        };
    }

    //注销的点击事件
    dieClickHandel(){
        this.setState({
            isLogin:false,
        })
    }

    getLocation(){
        //获取用户名
        let query = window.location.search.slice(1).split('&');
        query.forEach((e,i)=>{
            query[i] = e.split('=');
        })
        let data = {};
        query.forEach((e)=>{
            data[e[0]] = decodeURI(e[1])
            
        })
        let isLogin = false;
        let useAndPass = JSON.parse(localStorage.getItem('useAndPass')) || [];
        useAndPass.forEach((e)=>{
            if(e.useName===data.use){
                isLogin=true;
            }
        })
        if(isLogin){
            return {
                isLogin:true,
                useName:data.use
            }
        }
    }

    jumpRoute(path){
        this.props.history.push(path)
    }

    render(){


        return (
            <div className="mine">
                {/* <div className="m-head">
                    <img src={require('./img/login.png')} alt=""/>
                    <span className="use-name">十年雪落i</span>
                    <span className="die fr">注销</span>
                </div> */}
                <div className="m-head">
                    <img src={require('./img/logout.png')} alt=""/>
                    <span 
                        className="use-name" 
                        onClick={this.loginClickHandel}
                    >{this.state.isLogin?this.state.useName:'点击登录'}</span>
                    <span 
                        className={this.state.isLogin?'die fr':"died fr"}
                        onClick={this.dieClickHandel}
                    >注销</span>
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
                                专辑
                            </span>
                        </li>
                        <li className="fl">
                            <span className="">
                                歌单
                            </span>
                        </li>
                        <li className="fl">
                            <span className="">
                                歌手
                            </span>
                        </li>
                    </ul>
                    <div className="tip">
                        {this.state.isLogin?'抱歉，暂无收藏':'请登录后查看收藏'}
                    </div>
                </div>
            </div>
        )
    }
}