import React,{Component} from "react";
import './style/index.css';
import {searchSong} from './../../methods/methods';
import SearchItem from './component/searchItem'

export default class search extends Component{
    constructor(){
        super();
        this.state = {
            value:'',
            songList:[]
        }

        this.valueInputHandel = this.valueInputHandel.bind(this);
        this.searchHandel = this.searchHandel.bind(this);
        this.searchText = this.searchText.bind(this);
    }


    valueInputHandel(event){
        this.setState({value: event.target.value},()=>{
            this.searchHandel(this.state.value);
        });
    }

    searchHandel(value){
        searchSong({
            keyword:value
        }).then(data=>{
            if(data.result){
                this.setState({
                    songList:data.result.songs
                })
            }else{
                this.setState({
                    songList:[]
                })
            };
        })
    }

    searchText(event){
        let value = event.target.innerHTML
        this.setState({
            value
        })
        this.searchHandel(event.target.innerHTML);
        
    }

    render(){
        let {songList} = this.state;

        let list = songList.map((e,i)=>{
            return <SearchItem info={e} key={i}/>
        })

        

        return (
            <div className="search">
                <div className={this.state.songList.length?'hidd':''}>
                    <div className="search-input">
                        <input 
                            type="text" 
                            placeholder="歌名、歌手等" 
                            value={this.state.value}
                            onInput= {this.valueInputHandel}
                            // onChange={this.searchHandel(this.state.value)}
                        />
                        <span className="cancel" onClick={()=>{this.searchHandel(this.state.value)}}>搜索</span>
                    </div>

                    <div className="search-content">
                        <ul className="search-text clearfix">
                            <li className="s-item"  onClick={this.searchText}>gala</li>
                            <li className="s-item"  onClick={this.searchText}>陈奕迅</li>
                            <li className="s-item" onClick={this.searchText}>薛之谦</li>
                            <li className="s-item"  onClick={this.searchText}>赵雷</li>
                            <li className="s-item"  onClick={this.searchText}>赵传 看不见的地方</li>
                            <li className="s-item"  onClick={this.searchText}>战狼2原声电影带</li>
                            
                            {/* <li className="s-item">红红火火恍恍惚惚</li>
                            <li className="s-item">红红火火</li>
                            <li className="s-item">红红火火恍恍惚惚</li> */}
                        </ul>

                        {/* <ul className="search-history">
                            <li className="h-item">
                                红红火火恍恍惚惚
                            </li>
                        </ul>
                        <div className="clear-btn">
                            清除历史记录
                        </div> */}
                    </div>
                    <ul className="searched-list">
                        {list}
                    </ul>
                </div>

                
            </div>
        )
    }
}