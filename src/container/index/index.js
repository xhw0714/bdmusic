import React,{Component} from "react";
import ImgList from "./component/img_list"
import './style/home.css';

export default class arrtists extends Component{
    constructor(){
        super();
        this.state={
            todaySong:[],
            newSong:[]
        }
    }
    componentWillMount(){
        fetch("http://localhost/bdmusic/php/list.php",{
            method:"GET",
            type:"1",
            size:20,
            offset:0
        }).then(response=>{
            return response.json()
        }).then(data=>{
            
            this.setState({
                todaySong:data.song_list.slice(0,6),
                newSong:data.song_list.slice(6,9)             
            })
        })
    }
    render(){
    let {todaySong,newSong} = this.state;
    
    let todaySongList = todaySong.map(e=>{
        return <ImgList mes={e} key={e.song_id}/>
    })
    let newSongList = newSong.map(e=>{
        return <ImgList mes={e} key={e.song_id}/>
    })
        return (
            <section className="home-content">

                {/* 今日推荐 */}

                <div className="home-today">
                    <h2 className="home-today-title">今日推荐</h2>
                    <ul className="home-today-list clearfix">
                        {todaySongList}
                    </ul>
                </div>

                {/* 新歌速递 */}

                <div className="home-today">
                    <h2 className="home-today-title clearfix">
                        新歌速递
                        <span className="more fr">
                            更多
                        </span>
                    </h2>
                    <ul className="home-today-list clearfix">
                        {newSongList}
                    </ul>
                </div>

                {/* 音乐榜单 */}

                <div className="home-today">
                    <h2 className="home-today-title clearfix">
                        音乐榜单
                        <span className="more fr">
                            更多
                        </span>
                    </h2>
                    <div className="song-top">
                        <span className="song-top-item active">热歌榜</span>
                        <span className="song-top-item">新歌榜</span>
                        <span className="song-top-item">King榜</span>
                    </div>
                    <ul className="song-top-list">
                        {/* <li className="song-top-item">
                            <div className="song-pic fl">
                                <img src={require('./img/test.jpg')} alt=""/>
                                <span className="level">01</span>
                            </div>
                            <div className="play active fl">
                            </div>
                            <div className="song-info fl">
                                <span className="song-name">成都</span>
                                <span className="singer">赵雷</span>
                            </div>
                            <div className="down fl">
                            </div>
                        </li>
                        <li className="song-top-item">
                            <div className="song-pic fl">
                                <img src={require('./img/test.jpg')} alt=""/>
                                <span className="level">02</span>
                            </div>
                            <div className="play fl">

                            </div>
                            <div className="song-info fl">
                                <span className="song-name">成都</span>
                                <span className="singer">赵雷</span>
                            </div>
                            <div className="down fl">
                            </div>
                        </li> */}
                    </ul>
                    <div className="find">
                        <span className="find-top">
                            查看该榜单>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}