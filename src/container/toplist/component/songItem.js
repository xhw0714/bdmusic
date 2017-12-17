import React from "react";

export default class SongItem extends React.Component{
    render(){
        let {title,author,song_id} = this.props.info;
        let i = this.props.index;
        
        return (
            <li className="song-top-item">
                <div className="song-pic fl">
                    <span className="top-lv">{i+1}-</span>
                </div>
                <div className="play fl">

                </div>
                <div className="song-info fl">
                    <span className="song-name">{title}</span>
                    <span className="singer">{author}</span>
                </div>
                <div className="down fr">
                </div>
            </li> 
        )
    }
}