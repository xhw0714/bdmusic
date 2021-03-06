import React,{Component} from "react";
import ImgList from "./component/img_list"
import IndexList from "./component/index_list"
import './style/home.css';
import {newSong,listTop} from "../../methods/methods"

export default class arrtists extends Component{
    constructor(){
        super();
        this.state={
            todaySong:[],
            newSong:[],
            IndexListSong:[],
            index:0,
            typeMine:0
        };
        // this.changeRoute = this.changeRoute.bind(this)

    }
    componentWillMount(){
        newSong().then(data=>{
            // console.log(data)
            this.setState({
                todaySong:data.result.slice(0,6),
                newSong:data.result.slice(6,9)             
            })
        });

        this.changeIndexAndData(0,0)
    }

     changeIndexAndData = (type,index)=>{
        listTop({idx:type}).then(data=>{
            
            this.setState({
                IndexListSong:data.playlist.tracks.slice(0,6),
                index,
                typeMine:type
            })
        })
    }

    changeRoute(id){
        this.props.history.push(`/toplist/${id}`);
    }

    render(){
    let {todaySong,newSong,IndexListSong,index} = this.state;
    
    let todaySongList = todaySong.map(e=>{
        return <ImgList mes={e} key={e.id}/>
    })
    let newSongList = newSong.map(e=>{
        return <ImgList mes={e} key={e.id}/>
    })
    let IndexListSongCate = IndexListSong.map((e,index)=>{
        return <IndexList mes={e} key={e.id} index={index}/>
    })

    let classActive = "song-top-item active";
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
                        <span className={index===0?classActive:'song-top-item'} onClick={e=>this.changeIndexAndData(0,0)}>新歌榜</span>
                        <span className={index===1?classActive:'song-top-item'} onClick={e=>this.changeIndexAndData(1,1)}>热歌榜</span>
                        <span className={index===2?classActive:'song-top-item'} onClick={e=>this.changeIndexAndData(2,2)}>原创榜</span>
                        
                    </div>
                    <ul className="song-top-list">
                    {IndexListSongCate}
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
                        <span className="find-top" onClick={()=>{
                            this.changeRoute(this.state.typeMine);
                        }}>
                            查看该榜单>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}