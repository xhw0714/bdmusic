import React,{Component} from 'react';
import './style/index.css';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            type:'login',
            useName:'',
            passWord:'',
        }
    }

    render(){
        return (
            // 默认 登录   type-register  注册
            <section className="login-box ">
                <div className="login-head">
                    <span className="cancel fl">{'<'}</span>
                    <span className="login">登录</span>
                    <span className="register fr">注册</span>
                </div>
                <div className="space"></div>
                <div className="info-inputs">
                    <input type="text" placeholder="请输入账号"/>
                    <input type="text" placeholder="请输入密码"/>
                </div>
                <div className="login-btn">登录</div>
                <div className="login-btn can-click">登录</div>
            </section>
        )
    }
}