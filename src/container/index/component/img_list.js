import React from "react"
import {playMusic} from "../../../actions/index";
import {connect} from "react-redux";
 class ImgList extends React.Component {

    render() {
        if(this.props.mes){
            var {pic_big,title,song_id} = this.props.mes;
        }
        let {dispatch} = this.props;
        return (
            <li className="home-today-item" songid={song_id} onClick={e=>{
                dispatch(playMusic(song_id))
            }}>
                <div className="home-today-item-pic">
                    <img src={pic_big} alt=""/>
                    <span className="home-today-item-play"></span>
                </div>
                <div className="home-today-item-songname">{title}</div>
            </li>
        )
    }
}

export default connect()(ImgList);