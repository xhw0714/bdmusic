import React,{Component} from 'react';
import './style/index.css';

function totwo(n){
    return n>=10?n:"0"+n;
}

export default class playBig extends Component{
    
    seek = 0;

    componentDidUpdate() {
        let {getCurrentTime} = this.props;
        let {songTextBox,drap} = this.refs;
        let lis = document.querySelectorAll(".song-div .song-text li");
        let BoxHeight = document.querySelector(".song-div").offsetHeight;
        for(var i=0;i<lis.length;i++){
            if(lis[i].dataset.time == Math.floor(getCurrentTime)){
                this.goTop = lis[i].offsetTop;
            }
        }
        songTextBox.style.top = - (this.goTop-BoxHeight/2) + "px";
    }

    drapSong =(e)=>{
        this.props.setPlayOrPause();
        document.addEventListener("touchmove",(e)=>{
            this.drapMove(e)
        },false)

    }

    drapMove = (e) => {
        let moveLeft = e.touches[0].clientX - this.refs.drapBox.getBoundingClientRect().left;
        if(moveLeft<=0)moveLeft=0;
        if(moveLeft>= this.refs.drapBox.getBoundingClientRect().right - this.refs.drapBox.getBoundingClientRect().left) moveLeft = this.refs.drapBox.getBoundingClientRect().right - this.refs.drapBox.getBoundingClientRect().left;
        this.refs.drapSpan.style.left = moveLeft +'px';
        this.seek = moveLeft/1000 >1? 1 :moveLeft/1000;
    }

    drapEnd = (e) => {
        this.props.setPlayOrPause();
        this.props.setSeekTo(this.seek)
        document.removeEventListener("touchmove",this.drapMove,false)
    }

    render(){
        let {bigplayshowfn,isplaying,progress,setPlayOrPause,getCurrentTime,songMes,lrcArr} = this.props;
        let {drapSong,drapEnd} = this;
        let newTime = 0;
        let nextTime = 0;
        let lrcshow = lrcArr.map((e,i)=>{
            let newe = e.replace(/\[[^\]]+\]/g,function($0){
                newTime = Number($0.replace(/\[|\]/g,'').slice(0,2))*60 + Number($0.replace(/\[|\]/g,'').slice(3,5));
                return '';
            })
            if(lrcArr[i+1]){
                lrcArr[i+1].replace(/\[[^\]]+\]/g,function($0){
                    nextTime = Number($0.replace(/\[|\]/g,'').slice(0,2))*60 + Number($0.replace(/\[|\]/g,'').slice(3,5));
                    return '';
                })
            }else{
                nextTime = newTime;
            }
            if(Math.floor(getCurrentTime) === newTime){
                this.newTime = newTime;
            }
            if(newe.trim() === "")return '';
            return <li key={i} className={getCurrentTime>newTime&&getCurrentTime<nextTime?"on":""} data-time={isNaN(newTime)?0:newTime}>{newe}</li>
        })
        
        return (
            <section className="big-play">
                <div className="b-p-head clearfix">
                    <span className="back fl" onClick={bigplayshowfn}></span>
                    {/* 歌曲信息 两个span歌名和歌手 ul为歌词 */}
                    <div className="song-all">
                        <span className="song-name">{songMes.title}</span>
                        <span className="singer">{songMes.author}</span>
                        <div className="song-div">
                        <ul className="song-text"  ref="songTextBox">
                            {/* <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li>你我约定</li>
                            <li>难过的往事不要提</li>
                            <li className="on">你我约定</li>
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
                            <li>难过的往事不要提</li> */}
                            {lrcshow}
                        </ul>
                        </div>
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
                    <span className="time fl">{totwo(Math.floor(getCurrentTime/60))}:{totwo(Math.floor(getCurrentTime%60))}</span>
                    <span className="guidao fr" ref="drapBox">
                        <span className="small-bar" ref="drapSpan"  onTouchStart={e=>drapSong(e)} onTouchEnd={e=>drapEnd(e)} style={{left:1000*progress+'px'}}></span>
                    </span>
                </div>

                {/* 按钮区域 */}
                <div className="btns clearfix">
                {/* 播放模式 正常（顺序播放）无  单曲  type-one   随机（type-afs） */}
                    <span className="play-style type-one fl"></span>
                    <span className="pre fl"></span>
                    <span className={isplaying?"play-btn play fl":"play-btn stop fl"} onClick={e=>{
                        e.stopPropagation();
                        setPlayOrPause()
                    }}></span>
                    <span className="next fl"></span>
                    <span className="list fl"></span>
                </div>
            </section>
        )
    }
}