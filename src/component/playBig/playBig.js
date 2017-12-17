import React,{Component} from 'react';
import './style/index.css';

function totwo(n){
    return n>=10?n:"0"+n;
}

export default class playBig extends Component{
    
    seek = 0;
    //歌词滚动
    componentDidUpdate() {
        let {getCurrentTime} = this.props;
        let {songTextBox} = this.refs;
        let lis = document.querySelectorAll(".song-div .song-text li");
        let BoxHeight = document.querySelector(".song-div").offsetHeight;
        for(var i=0;i<lis.length;i++){
            if(Number(lis[i].dataset.time) === Math.floor(getCurrentTime)){
                this.goTop = lis[i].offsetTop;
            }
        }
        songTextBox.style.top = - (this.goTop-BoxHeight/2) + "px";
    }
    componentDidMount(){
        let BoxHeight = document.querySelector(".song-div").offsetHeight;
        let {songTextBox} = this.refs;
        songTextBox.style.top = BoxHeight/2 + "px";
    }

    //拖拽进度
    drapSong =(e)=>{
        this.props.setPlayOrPause();
        document.addEventListener("touchmove",this.drapMove,false)
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
        //根据时间拆分歌词
        let newTime = 0;
        let lrcshow = lrcArr.map((e,i)=>{
            let newe = e.replace(/\[[^\]]+\]/g,function($0){
                newTime = Number($0.replace(/\[|\]/g,'').slice(0,2))*60 + Number($0.replace(/\[|\]/g,'').slice(3,5));
                return '';
            })
            if(newe.trim() === '')return '';
            return {name:newe,time:isNaN(newTime)?0:newTime}
        }).filter(e=>e!=='');
        let item = lrcshow.map((e,i)=>{
            return <li key={i} className={getCurrentTime>=e.time&&getCurrentTime<lrcshow[i+1].time?"on":''} data-time={e.time}>{e.name}</li>
        })
        //渲染
        return (
            <section className="big-play">
                <div className="b-p-head clearfix">
                    <span className="back fl" onClick={bigplayshowfn}></span>
                    {/* 歌曲信息 两个span歌名和歌手 ul为歌词 */}
                    <div className="song-all">
                        <span className="song-name">{songMes.name}</span>
                        <span className="singer">{songMes.ar[0].name}</span>
                        <div className="song-div">
                        <ul className="song-text"  ref="songTextBox">
                          
                            {lrcArr.length>0?item:"没有歌词"}
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