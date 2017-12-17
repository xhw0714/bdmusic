import React from "react"
import {playMusic} from "../../../actions/index";
import {connect} from "react-redux";
 class ImgList extends React.Component {

    render() {
        if(this.props.mes){
            var {song,name,id} = this.props.mes;
        }
        let {dispatch} = this.props;
        return (
            <li className="home-today-item" songid={id} onClick={e=>{
                dispatch(playMusic(id))
            }}>
                <div className="home-today-item-pic">
                    <img src={song.album.blurPicUrl} alt=""/>
                    <span className="home-today-item-play"></span>
                </div>
                <div className="home-today-item-songname">{name}</div>
            </li>
        )
    }
}

export default connect()(ImgList);