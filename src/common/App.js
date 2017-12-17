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

class App extends Component {
  constructor(){
    super();
    this.state={
      nowPlayIndex:0,
      nowPlayLink:'http://m10.music.126.net/20171217115047/20bda43afab2c8aa7c650ea78888850f/ymusic/603f/2799/ea87/0ac26d0e219c049b2c5a12fd6be2826f.mp3',
      isPlaying:true,
      playingId:0,
      progress:0,
      songMes:{},
      bigPlayShow:false,
      getCurrentTime:0,
      lrcArr:[]
    }
  }

  playSong=(id)=>{
    // let {playAudio} = this.refs;
    let {playingId} = this.state;
    let {getprogress} = this;
    if(playingId === id)return;
    fetch("http://localhost:3000/music/url?id="+id+"").then(res=>{
      return res.json();
    }).then(data=>{
      console.log(data)
// <<<<<<< HEAD
      // this.parseLyric(data.songinfo.lrclink)
      //   this.setState({
      //     nowPlayLink:data.bitrate.file_link, //"http://localhost/1.mp3"
      //     isPlaying:true,
      //     playingId:id,
      //     songMes:data.songinfo
      //   },()=>{
      //     getprogress()
      //   })
// =======
//       this.parseLyric(data.songinfo.lrclink)
//         this.setState({
//           nowPlayLink:"http://localhost/1.mp3", //data.bitrate.file_link
//           isPlaying:true,
//           playingId:id,
//           songMes:data.songinfo
//         },()=>{
//           getprogress()
//         })
// >>>>>>> c7fdce4c013f3eaf2a13c40621357e831b42437f
    })
  }

  parseLyric = (lrc)=>{
    fetch(lrc).then(res=>{
      return res.text()
    }).then(data=>{
      this.setState({
        lrcArr:data.split("\n")
      })
    })
  }

  getprogress = ()=>{
    this.timer = setInterval(()=>{
      let {playAudio} = this.refs;
      this.setState({
        progress:playAudio.prevPlayed,
        getCurrentTime:playAudio.getCurrentTime()
      })
    },300)
  }  

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

  bigplayshowfn= ()=>{
      let {bigPlayShow} = this.state;
      this.setState({
        bigPlayShow:!bigPlayShow
      })
  }

  setSeekTo=(num)=>{
    this.refs.playAudio.seekTo(num)
  }
  // componentDidUpdate(){
  //   let {playArr} = this.props;
  //   if(playArr.length>0){
  //     this.playSong(playArr[0].id)
  //   }
  // }

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
