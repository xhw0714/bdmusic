import React,{Component} from "react";

import './style/home.css';

export default class arrtists extends Component{
    render(){
        return (
            <section className="home-content">
                <div className="home-today">
                    <h2 className="home-today-title">今日推荐</h2>
                    <ul className="home-today-list clearfix">
                        <li className="home-today-item">
                            <div className="home-today-item-pic">
                                <img src={require('./img/1.jpg')} alt=""/>
                                <span className="home-today-item-play"></span>
                            </div>
                            <div className="home-today-item-songname">小酒窝</div>
                        </li>
                        <li className="home-today-item">
                            <div className="home-today-item-pic">
                                <img src={require('./img/1.jpg')} alt=""/>
                                <span className="home-today-item-play"></span>
                            </div>
                            <div className="home-today-item-songname">小酒窝</div>
                        </li>
                        <li className="home-today-item">
                            <div className="home-today-item-pic">
                                <img src={require('./img/1.jpg')} alt=""/>
                                <span className="home-today-item-play"></span>
                            </div>
                            <div className="home-today-item-songname">小酒窝</div>
                        </li>
                        <li className="home-today-item">
                            <div className="home-today-item-pic">
                                <img src={require('./img/1.jpg')} alt=""/>
                                <span className="home-today-item-play"></span>
                            </div>
                            <div className="home-today-item-songname">小酒窝</div>
                        </li>
                        <li className="home-today-item">
                            <div className="home-today-item-pic">
                                <img src={require('./img/1.jpg')} alt=""/>
                                <span className="home-today-item-play"></span>
                            </div>
                            <div className="home-today-item-songname">小酒窝</div>
                        </li>
                        <li className="home-today-item">
                            <div className="home-today-item-pic">
                                <img src={require('./img/1.jpg')} alt=""/>
                                <span className="home-today-item-play"></span>
                            </div>
                            <div className="home-today-item-songname">小酒窝</div>
                        </li>
                    </ul>
                </div>
                <div className="home-new">

                </div>
            </section>
        )
    }
}