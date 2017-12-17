import React from "react";
import {playMusic} from "../../../actions/index";
import {connect} from "react-redux";
class IndexList extends React.Component{
    render(){
        let {name,ar,al,id} = this.props.mes;
        let {index,dispatch} = this.props;

        return (
            <li className="song-top-item" onClick={e=>{
                dispatch(playMusic(id))
            }}>
                <div className="song-pic fl">
                    <img src={al.picUrl} alt=""/>
                    <span className="level">{index+1}</span>
                </div>
                <div className="play fl">

                </div>
                <div className="song-info fl">
                    <span className="song-name">{name}</span>
                    <span className="singer">{ar[0].name}</span>
                </div>
                {/* <div className="down fl">
                </div> */}
            </li> 
        )
    }
}


export default connect()(IndexList);