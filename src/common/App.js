import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './style/App.css';
import Header from "../component/headNav/headNav";
import Index from "../container/index/index";
import Artists from "../container/artists/artists";
import Search from "../component/search/search";
import Songlist from "../container/songlists/songlists";
import Ucenter from "../container/ucenter/ucenter"
import Listcate from "../container/listcate/listcate";
import PlaySmall from './../component/playSmall/playSmall';


class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Header/>
          <div>
              <Route path="/" exact component={Index}></Route>
              <Route path="/artists"  component={Artists}></Route>
              <Route path="/search"  component={Search}></Route>
              <Route path="/songlists"  component={Songlist}></Route>
              <Route path="/ucenter"  component={Ucenter}></Route>
              <Route path="/listcate"  component={Listcate}></Route>
          </div>
          <PlaySmall/>
      </div>
    );
  }
}

export default App;
