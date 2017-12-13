import React,{Component} from "react";
import './style/index.css';

export default class search extends Component{
    render(){
        return (
            <div className="search">
                <div className="hidd">
                    <div className="search-input">
                        <input type="text" placeholder="歌名、歌手等"/>
                        <span className="cancel">取消</span>
                    </div>

                    <div className="search-content">
                        <ul className="search-text clearfix">
                            <li className="s-item">红红火火</li>
                            <li className="s-item">红红火火恍恍惚惚</li>
                            <li className="s-item">红红火火</li>
                            <li className="s-item">红红火火恍恍惚惚</li>
                            <li className="s-item">红红火火</li>
                            <li className="s-item">红红火火恍恍惚惚</li>
                            <li className="s-item">红红火火</li>
                            <li className="s-item">红红火火恍恍惚惚</li>
                        </ul>

                        <ul className="search-history">
                            <li className="h-item">
                                红红火火恍恍惚惚
                            </li>
                        </ul>
                        <div className="clear-btn">
                            清除历史记录
                        </div>
                    </div>
                    <ul className="searched-list">
                        <li>
                            <div className="fl">
                                <span className="song-name">背过手</span>
                                <span className="singer">薛之谦</span>
                            </div>
                            <div className=" fr"></div>
                        </li>
                        <li>
                            <div className="fl">
                                <span className="song-name">背过手</span>
                                <span className="singer">薛之谦</span>
                            </div>
                            <div className="down fr"></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}