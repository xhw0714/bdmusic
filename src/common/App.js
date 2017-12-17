import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './style/App.css';
import Header from "../component/headNav/headNav";
import Index from "../container/index/index";
import Artists from "../container/artists/artists";
import Search from "../component/search/search";
import Songlist from "../container/songlists/songlists";
import Ucenter from "../container/ucenter/ucenter";
import Listcate from "../container/listcate/listcate";
import PlaySmall from './../component/playSmall/playSmall';
import Login from './../component/login/login';
import PlayBig from './../component/playBig/playBig';
import {connect} from "react-redux";
import ReactPlayer from 'react-player';
import TopList from './../container/toplist/topList';

import {songDetail,songUrl,lyric} from "../methods/methods"

class App extends Component {
  constructor(){
    super();
    this.state={
      nowPlayIndex:0,
      nowPlayLink:'',
      isPlaying:true,
      playingId:0,
      progress:0,
      songMes:{},
      bigPlayShow:false,
      getCurrentTime:0,
      lrcArr:[]
    }
  }
//播放歌曲
  playSong=(id)=>{
    // let {playAudio} = this.refs;
    let {playingId} = this.state;
    let {getprogress} = this;
    if(playingId === id)return;
    songUrl({id}).then(url=>{
      
      songDetail({id}).then(detail=>{
        
        lyric({id}).then(lryic=>{
          this.setState({
            nowPlayLink:url.data[0].url, //"http://localhost/1.mp3"
            isPlaying:true,
            playingId:id,
            songMes:detail.songs[0]
          },()=>{
            getprogress();
            if(lryic.lrc){
              this.setState({
                lrcArr:lryic.lrc.lyric.split("\n")
              })
            }
          })
        })
      })
    })
  }

//歌曲播放进度条
  getprogress = ()=>{
    this.timer = setInterval(()=>{
      let {playAudio} = this.refs;
      this.setState({
        progress:playAudio.prevPlayed,
        getCurrentTime:playAudio.getCurrentTime()
      })
    },300)
  }  
//播放暂停
  setPlayOrPause=()=>{
    let {isPlaying} = this.state;
      this.setState({
        isPlaying:!isPlaying
      },()=>{
        if(!isPlaying){
          this.getprogress()
        }else{
          clearInterval(this.timer)
        }
      })
  }
//显示大播放器
  bigplayshowfn= ()=>{
      let {bigPlayShow} = this.state;
      this.setState({
        bigPlayShow:!bigPlayShow
      })
  }
//拖拽进度条
  setSeekTo=(num)=>{
    this.refs.playAudio.seekTo(num)
  }


  render() {
    let {playSong,setPlayOrPause,bigplayshowfn,setSeekTo} = this;
    let {nowPlayLink,isPlaying,progress,songMes,playingId,bigPlayShow,getCurrentTime,lrcArr} = this.state;
    let {playArr} = this.props;
    if(playArr.length>0){
      playSong(playArr[0].id)
    }
    return (
      // havaPlay 留出底部的padding值
      <div className={playingId!==0?"App havaPlay":'App'}>
          <Header/>
          <div>
              <Route path="/" exact component={Index}></Route>
              <Route path="/artists"  component={Artists}></Route>
              <Route path="/search"  component={Search}></Route>
              <Route path="/songlists"  component={Songlist}></Route>
              <Route path="/ucenter"  component={Ucenter}></Route>
              <Route path="/listcate"  component={Listcate}></Route>
              <Route path="/login"  component={Login}></Route>
              <Route path="/toplist/:id?" component={TopList}></Route>
          </div>
          {playingId!==0?<PlaySmall bigplayshowfn={bigplayshowfn}  arr={playArr[0]} progress={progress} songMes={songMes} isplaying={isPlaying} setPlayOrPause={setPlayOrPause}/>:null}
          {bigPlayShow?<PlayBig bigplayshowfn={bigplayshowfn} isplaying={isPlaying} getCurrentTime={getCurrentTime} progress={progress} songMes={songMes} setPlayOrPause={setPlayOrPause} lrcArr={lrcArr} setSeekTo={setSeekTo}/>:null}
          <ReactPlayer url={nowPlayLink} playing={isPlaying} ref="playAudio" width={0} height={0} progressFrequency={0.5}/>
      </div>
    )
  }
}

function getStateAtredux (state){
  return {
    playArr:state.playArr
  }
}


export default connect(getStateAtredux)(App);
