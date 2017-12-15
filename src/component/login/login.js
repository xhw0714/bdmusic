import React,{Component} from 'react';
import './style/index.css';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            type:'login',
            useName:'',
            passWord:'',
        }
        this.useInputHandel = this.useInputHandel.bind(this);
        this.passInputHandel = this.passInputHandel.bind(this);
        this.changeType = this.changeType.bind(this);
        this.enterHandle = this.enterHandle.bind(this);
    }
    // 切换注册或者登录
    changeType(value){
        this.setState({
            type:value,
            useName:'',
            passWord:'',
        })
    }

    // 支持输入
    useInputHandel(event){
        this.setState({useName: event.target.value});
    }
    passInputHandel(event){
        this.setState({passWord: event.target.value});
    }

    //点击注册或者登陆
    enterHandle(){
        if(localStorage){
            if(this.state.type==='login'){
                //登陆
                let data = JSON.parse(localStorage.getItem('useAndPass')) || [];
                let key = false;
                data.forEach((e)=>{
                    if(this.state.useName===e.useName && this.state.passWord===e.passWord){
                        //登陆成功
                        let data =  {
                            isLogin:true,
                            useName:e.useName,
                            passWord:e.passWord
                        }

                        localStorage.setItem('isLogin',JSON.stringify(data))
                        this.props.history.push('/ucenter');
                        key = true;
                        return;
                    }
                });
                if(!key){
                    alert('账号或者密码错误');
                }
            }else{
                let data = JSON.parse(localStorage.getItem('useAndPass')) || [];
                let key = true;
                data.forEach((e)=>{
                    if(this.state.useName===e.useName){
                        //重复
                        alert('用户名以被注册');
                        key=false;
                        return;
                    }
                });

                if(key){
                    let json = [...data,{useName:this.state.useName,passWord:this.state.passWord}];
                    localStorage.setItem('useAndPass',JSON.stringify(json));
                    alert('注册成功')
                    this.changeType('login');
                }

            }
        }else{
            alert('暂不支持此功能')
        }
    }

    render(){

        

        let isLogin = false;
        if(this.state.useName.trim() && this.state.passWord.trim()){
            isLogin = true;
        }

        return (
            // 默认 登录   type-register  注册
            <section className={this.state.type==='login'?'login-box':'login-box type-register'}>
                <div className="login-head">
                    {/* <span className="cancel fl">{'<'}</span> */}
                    <Link to="/ucenter" className="cancel fl">{'<'}</Link>
                    <span className="login" onClick={()=>{
                         this.changeType('login')
                    }}>登录</span>
                    <span className="register fr" onClick={()=>{
                        this.changeType('register')
                    }}>注册</span>
                </div>
                <div className="space"></div>
                <div className="info-inputs">
                    <input 
                        type="text" 
                        placeholder="请输入账号" 
                        value={this.state.useName}
                        onInput={this.useInputHandel}
                    />
                    <input 
                        type="text" 
                        placeholder="请输入密码" 
                        value={this.state.passWord}
                        onInput={this.passInputHandel}
                    />
                </div>
                <div 
                    className={isLogin?"login-btn can-click":"login-btn"}
                    onClick={this.enterHandle}
                >{this.state.type==='login'?"登录":"注册"}</div>
                {/* <div className="login-btn can-click">登录</div> */}
            </section>
        )
    }
}