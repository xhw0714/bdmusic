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
// import PlayBig from './../component/playBig/playBig';
import {connect} from "react-redux";
import ReactPlayer from 'react-player';

class App extends Component {
  constructor(){
    super();
    this.state={
      nowPlayIndex:0,
      nowPlayLink:'',
      isPlaying:true,
      playingId:0
    }
  }

  playSong=(id)=>{
    let {playAudio} = this.refs;
    console.log(playAudio)
    let {playingId} = this.state;
    if(playingId === id)return;
    fetch("http://localhost/bdmusic/php/songmes.php?songid="+id+"").then(res=>{
      return res.json();
    }).then(data=>{
        this.setState({
          nowPlayLink:data.bitrate.file_link,
          isPlaying:true,
          playingId:id
        })
    })
  }


  render() {
    let {playSong} = this;
    let {nowPlayLink,isPlaying} = this.state;
    let {playArr} = this.props;
    if(playArr.length>0){
      playSong(playArr[0].id)
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
          <ReactPlayer url={nowPlayLink} playing={isPlaying} ref="playAudio" width={0} height={0}/>
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
