import React,{Component} from "react";

import './style/index.css';

export default class arrtists extends Component{
    render(){
        return (
            <div className="singer">
                <ul className="check-box clearfix">
                    <li className="check-item active">全部</li>
                    <li className="check-item">华语</li>
                    <li className="check-item">欧美</li>
                    <li className="check-item">韩国</li>
                    <li className="check-item">日本</li>
                    <li className="check-item">其他</li>
                </ul>
                <ul className="check-box clearfix">
                    <li className="check-item active">全部</li>
                    <li className="check-item">男</li>
                    <li className="check-item">女</li>
                    <li className="check-item">组合</li>
                </ul>
                <div className="singers">
                    {/* <h3 className="singers-title">热门</h3> */}
                    <ul>
                        <li className="clearfix">
                            <img src={require('./img/246669444 (1).jpg')} alt=""/>
                            <span>薛之谦</span>
                        </li>
                        <li className="clearfix">
                            <img src={require('./img/246669444 (1).jpg')} alt=""/>
                            <span>薛之谦</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}