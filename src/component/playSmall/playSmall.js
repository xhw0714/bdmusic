import React,{Component} from 'react';
import './style/index.css';

export default class extends Component{
    render(){
        return (
            <div className="music-play-small clearfix">
                <div 
                    className="bar-tool"
                    style={{width:30}}
                ></div>

                <div className="fl">
                    <span className="song-pic fl">
                        <img src={require('./img/pic.png')} alt=""/>
                    </span>
                    <span className="song-info fl">
                        <span className="song-name">像风一样</span>
                        <span className="singer">薛之谦</span>
                    </span>
                </div>
                <div className="fr">
                        {/* 状态play 和 stop */}
                    <div className="play-btn stop fl"></div>
                    <div className="next-btn fl"></div>
                    <span className="list-btn fl"></span>
                </div>
            </div>
        )
    }
}