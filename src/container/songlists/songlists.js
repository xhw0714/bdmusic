import React,{Component} from "react";
import {searchSong,songDetail} from './../../methods/methods'
import './style/index.css';
import Imglist from "./component/Imglist"

export default class songlists extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            lists:[],
            newTag:"流行",
            offset:1
        }

        this.getSongList = this.getSongList.bind(this);
    }
    componentWillMount(){
        this.getSongList('流行')
    }
    getSongList = (tag="流行",limit=6,offset=1) => {
        searchSong({
            keyword:tag,
            limit,
            offset
        })
        .then(data=>{
            if(data.result){
                this.setState({
                    lists:data.result.songs,
                    newTag:tag
                },()=>{
                    this.state.lists.forEach((e,i) => {
                        songDetail({
                            id:e.id
                        }).then((data)=>{
                            let arr = this.state.list;
                            arr[i] = data.songs[0]
                            this.setState({
                                list:arr
                            })
                        })
                    });
                })
            }else{
                this.setState({
                    lists:[]
                })
            };
        })
    }

    getListMore(){
        this.setState({
            offset:this.state.offset+1
        },()=>{
            searchSong({
                keyword:this.state.newTag,
                limit:6,
                offset:this.state.offset*6
            })
            .then(data=>{
                if(data.result){
                    this.setState({
                        lists:[...this.state.lists,...data.result.songs],
                    },()=>{

                        this.state.lists.forEach((e,i) => {
                            songDetail({
                                id:e.id
                            }).then((data)=>{
                                let arr = this.state.list;
                                arr[i] = data.songs[0]
                                this.setState({
                                    list:arr
                                })
                            })
                        });
                    })
                }else{
                    this.setState({
                        lists:[]
                    })
                };
            })
        })
    }
    render(){
        let {list,newTag} = this.state;
        let Songlist = list.map(e=>{
            return <Imglist mes={e} key={e.id}/>
        });
        
        return (
            <div className="songlist">
                <div className="songlist-c">
                    <h2 className="title">
                        热门分类
                    </h2>
                    <ul className="hot-list clearfix">
                        <li className="big fl">
                            <span className="text" onClick={e=>this.getSongList("流行")}>流行</span>
                        </li>
                        <li className="small-list fr">
                            <ul className="fl">
                                <li className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList("爵士")}>爵士</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList("摇滚")}>摇滚</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList("情歌")}>情歌</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList("老歌")}>老歌</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="songlist-box">
                    <h2 className="title">
                        {newTag}音乐
                    </h2>
                    <ul className="songlist-list clearfix">
                    {Songlist}
                        {/* <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说,说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹说你妹</div>
                        </li>
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说</div>
                        </li>
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说</div>
                        </li>
                        <li className="fl">
                            <div className="item-pic">
                                <img src={require('./img/pic.jpg')} alt=""/>
                                <div className="listen-num">
                                    1200
                                </div>
                                <div className="play-btn"></div>
                            </div>
                            <div className="item-info">华语·流行·么么</div>
                            <div className="item-name">男人心事让音乐慢慢诉说</div>
                        </li> */}
                        
                    </ul>
                    <div className="get-more" onClick={()=>{
                        this.getListMore()
                    }}>点击获取更多</div>
                </div>
            </div>
        )
    }
}