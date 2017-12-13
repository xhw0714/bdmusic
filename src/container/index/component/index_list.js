import React from "react";

export default class IndexList extends React.Component{
    render(){
        let {album_title,artist_name ,pic_big} = this.props.mes;
        let {index} = this.props;
        return (
            <li className="song-top-item">
                <div className="song-pic fl">
                    <img src={pic_big} alt=""/>
                    <span className="level">{index+1}</span>
                </div>
                <div className="play fl">

                </div>
                <div className="song-info fl">
                    <span className="song-name">{album_title}</span>
                    <span className="singer">{artist_name}</span>
                </div>
                <div className="down fl">
                </div>
            </li> 
        )
    }
}