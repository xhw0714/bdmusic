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

class App extends Component {
  constructor(){
    super();
    this.state={
      nowPlayIndex:0,
      nowPlayLink:''
    }
  }

  playSong=(id)=>{
    let {playAudio} = this.refs;
    fetch("http://localhost/bdmusic/php/songmes.php?songid="+id+"").then(res=>{
      return res.json();
    }).then(data=>{
    //  let audioPlay = document.getElementById("playSongAudio")
    //   this.setState({
    //     nowPlayLink:data.bitrate.show_link
    //   },()=>{
    //     console.log(audio)
    //     let {nowPlayLink} = this.state;
    //     audio.src = nowPlayLink;
    //     audio.play();
    //   })
      console.log(playAudio)
    })
  }


  render() {
    let {playSong} = this;
    let {nowPlayIndex,nowPlayLink} = this.state;
    let {playArr} = this.props;
    if(playArr[0]){
      playArr[0].id?playSong(playArr[0].id):'';
    }
    return (
      // havaPlay 留出底部的padding值
      <div className="App havaPlay">
          <Header/>
          <div>
              <Route path="/" exact component={Index}></Route>
              <Route path="/artists"  component={Artists}></Route>
              <Route path="/search"  component={Search}></Route>
              <Route path="/songlists"  component={Songlist}></Route>
              <Route path="/ucenter"  component={Ucenter}></Route>
              <Route path="/listcate"  component={Listcate}></Route>
              <Route path="/login"  component={Login}></Route>
          </div>
          <PlaySmall arr={playArr[0]} />
          {/* <Login/> */}
          {/* <PlayBig/> */}
          {/* <audio src={nowPlayLink} source="true" autoPlay="autoplay" id="playSongAudio" ref="audio"></audio> */}
          <ReactPlayer url='http://zhangmenshiting.baidu.com/data2/music/42783748/42783748.mp3?xcode=d081dd12e4dd102b38b319dd5c3c046e' ref="playAudio" playing={true} width={0} height={0}/>
      </div>
    );
  }
}

function getStateAtredux (state){
  return {
    playArr:state.playArr
  }
}


export default connect(getStateAtredux)(App);
