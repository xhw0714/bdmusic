import React,{Component} from 'react';
import './style/index.css';

export default class extends Component{
    constructor(){
        super();
        this.state={
            id:0
        }
    }
    
    render(){
        let {progress,songMes,isplaying,setPlayOrPause,bigplayshowfn} = this.props;
        return (
            <div className="music-play-small clearfix" onClick={e=>bigplayshowfn()}>
                <div 
                    className="bar-tool"
                    style={{width:progress*100+'%'}}
                ></div>

                <div className="fl">
                    <span className="song-pic fl">
                        <img src={songMes.al.picUrl} alt=""/>
                    </span>
                    <span className="song-info fl">
                        <span className="song-name">{songMes.name}</span>
                        <span className="singer">{songMes.ar[0].name}</span>
                    </span>
                </div>
                <div className="fr">
                        {/* 状态play 和 stop */}
                    <div className={isplaying?"play-btn play fl":"play-btn stop fl"} onClick={e=>{
                        e.stopPropagation();
                        setPlayOrPause()
                    }}></div>
                    <div className="next-btn fl"></div>
                    {/* <span className="list-btn fl"></span> */}
                </div>
                
            </div>
        )
    }
}