import React,{Component} from 'react';
import './style/index.css';

export default class playBig extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        return (
            <section className="big-play">
                <div className="b-p-head clearfix">
                    <span className="back fl"></span>
                    {/* 歌曲信息 两个span歌名和歌手 ul为歌词 */}
                    <div className="song-all">
                        <span className="song-name">约定</span>
                        <span className="singer">周慧</span>
                        <ul className="song-text">
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                        </ul>
                    </div>
                    <span className="find fr"></span>
                </div>
                {/* 收藏与下载按钮 */}
                <div className="btn-like-and-down clearfix">
                    <span className="like fl"></span>
                    <span className="down fr"></span>
                </div>
                {/* 歌曲进度条 */}
                <div className="big-bar-tool clearfix">
                    <span className="time fl">00:00</span>
                    <span className="guidao fr">
                        <span className="small-bar"></span>
                    </span>
                </div>

                {/* 按钮区域 */}
                <div className="btns clearfix">
                {/* 播放模式 正常（顺序播放）无  单曲  type-one   随机（type-afs） */}
                    <span className="play-style type-one fl"></span>
                    <span className="pre fl"></span>
                    <span className="play-btn stop fl"></span>
                    <span className="next fl"></span>
                    <span className="list fl"></span>
                </div>
            </section>
        )
    }
}