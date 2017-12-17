import React from "react";

export default class SongItem extends React.Component{
    render(){
        let {al,ar,id} = this.props.info;
        let i = this.props.index;
        

        let author = '';
        ar.forEach((e,i) => {
            if(i>=1){
                author += ' & ';
            }
            author += e.name;
        });

        return (
            <li className="song-top-item" song_id={id}>
                <div className="song-pic fl">
                    <span className="top-lv">{i+1}-</span>
                </div>
                <div className="play fl">

                </div>
                <div className="song-info fl">
                    <span className="song-name">{al.name}</span>
                    <span className="singer">{author}</span>
                </div>
                <div className="down fr">
                </div>
            </li> 
        )
    }
}