import React,{Component} from "react";

import './style/index.css';
import Imglist from "./component/Imglist"

export default class songlists extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            newTag:"流行"
        }
    }
    componentWillMount(){
        this.getSongList(1)
    }
    getSongList = (type,tag="流行") => {
        fetch("http://localhost/bdmusic/php/list.php?type="+type+"&size=6&offset=0").then(res=>{
            return res.json()
        }).then(data=>{
            this.setState({
                list:data.song_list,
                newTag:tag
            })
        })
    }
    render(){
        let {list,newTag} = this.state;
        let Songlist = list.map(e=>{
            return <Imglist mes={e} key={e.song_id}/>
        })
        return (
            <div className="songlist">
                <div className="songlist-c">
                    <h2 className="title">
                        热门分类
                    </h2>
                    <ul className="hot-list clearfix">
                        <li className="big fl">
                            <span className="text" onClick={e=>this.getSongList(1,"流行")}>流行</span>
                        </li>
                        <li className="small-list fr">
                            <ul className="fl">
                                <li className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList(12,"爵士")}>爵士</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList(11,"摇滚")}>摇滚</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList(23,"情歌")}>情歌</span>
                                </li>
                                <li  className="small fl">
                                    <span  className="text" onClick={e=>this.getSongList(22,"老歌")}>老歌</span>
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
                </div>
            </div>
        )
    }
}