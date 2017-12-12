import React,{Component} from "react";
import './style/index.css';

export default class search extends Component{
    render(){
        return (
            <div className="search">
                <div className="search-input">
                    <input type="text" placeholder="歌名、歌手等"/>
                    <span className="cancel">取消</span>
                </div>

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
        )
    }
}