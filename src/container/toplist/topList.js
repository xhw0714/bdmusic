import React , {Component} from 'react';
import './style/index.css';
import SongItem from './component/songItem.js';
import {listTop} from './../../methods/methods'



export default class TopList extends Component{
    constructor(){
        super();
        this.state={
           picLink:'',
           songList:[]
        };
  
    }

    componentWillMount() {
        let routeId = window.location.pathname.split('/')[2] || 1;
        
        // fetch(`http://localhost/bdmusic/php/list.php?type=${routeId}&size=20&offset=0`,{
        //     method:'GET'
        // }).then(response=>{
        //     return response.json();
        // }).then((data)=>{
        //     this.setState({
        //         picLink:data.billboard.pic_s210,
        //         songList:data.song_list
        //     })
        // });

        
        listTop({
            idx:routeId
        }).then((data)=>{
            this.setState({
                picLink:data.playlist.coverImgUrl,
                songList:data.playlist.tracks
            })
        })
    }
    

    render(){
        let {picLink,songList} = this.state;

        let list = songList.map((e,i)=>{
            return <SongItem key={i} info={e} index={i}/>
        })

        return (
            <div className="top-list">
                <div className="pic-bg">
                    <img src={picLink} alt=""/>
                </div>
                <ul className="song-top-list">
                    {list}
                </ul>
            </div>
        )
    }
}
