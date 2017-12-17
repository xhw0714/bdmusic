import React from "react";
import {connect} from 'react-redux'
import {playMusic} from './../../../actions/index'
class SongItem extends React.Component{
    render(){
        let {name,ar,id} = this.props.info;
        let i = this.props.index;
        

        let author = '';
        ar.forEach((e,i) => {
            if(i>=1){
                author += ' & ';
            }
            author += e.name;
        });
        let {dispatch} = this.props;
        console.log(this.props)
        return (
            <li className="song-top-item" onClick={()=>{
                dispatch(playMusic(id))
            }}>
                <div className="song-pic fl">
                    <span className="top-lv">{i+1}-</span>
                </div>
                <div className="play fl">

                </div>
                <div className="song-info fl">
                    <span className="song-name">{name}</span>
                    <span className="singer">{author}</span>
                </div>
                <div className="down fr">
                </div>
            </li> 
        )
    }
}

export default connect()(SongItem)