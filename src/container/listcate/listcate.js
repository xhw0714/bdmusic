import React,{Component} from "react";
import './style/index.css';
import TopItem from './component/TopItem';
import {listTop} from './../../methods/methods';

export default class listcate extends Component{
    constructor(){
        super();
        this.state = {
            songList:[]
        };
        this.changeRoute = this.changeRoute.bind(this);
    }
    // 为了防止ajax响应的时间差问题 所以使用index强制设置每条数据在数组中的位置
    getSongList(type,index){
        listTop({
            idx:type
        }).then(data=>{
            let obj = {
                type_mine:type,
                picLink:data.playlist.coverImgUrl,
                list:data.playlist.tracks.slice(0,3)
            }
            let arr = this.state.songList;
            arr[index] = obj
            this.setState({
                songList:arr
            })
        })
    }
    
    componentWillMount(){
        this.getSongList(0,0);
        this.getSongList(1,1);
        this.getSongList(2,2);
        this.getSongList(3,3);
        this.getSongList(4,4);
        this.getSongList(5,5);
        this.getSongList(6,6);
        this.getSongList(7,7);
    }


    changeRoute(id){
        this.props.history.push(`/toplist/${id}`);
    }

    render(){

        let {songList} = this.state;
        
        let list = songList.map((e,i)=>{
            return <TopItem data={e} key={i} methods={this.changeRoute}/>
        })

        return (
            <div className="top-page">
                {list}
                {/* <div className="item clearfix">
                    <div className="pic fl">
                        <img src={require('./img/test.jpg')} alt=""/>
                        <span></span>
                    </div>
                    <ul className="song-box fl">
                        <li className="song-item">
                            <span className="num">1</span>
                            <span className="song-name">背过手 - 薛之谦</span>
                        </li>
                        <li className="song-item">
                            <span className="num">2</span>
                            <span className="song-name">背过手 - 薛之谦</span>
                        </li>
                        <li className="song-item">
                            <span className="num">3</span>
                            <span className="song-name">背过手 - 薛之谦</span>
                        </li>
                    </ul>
                </div> */}
            </div>
        )
    }
}