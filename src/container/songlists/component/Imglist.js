import React from "react";

import {playMusic} from './../../../actions/index';
import {connect} from 'react-redux';

class ImgList extends React.Component{
    constructor(){
        super();
        this.state={
            num:Math.round(Math.random()*1000000)
        }
    }
    render(){
        if(this.props.mes){
            var {al,name,id} = this.props.mes;
        }
        let {dispatch}  = this.props
        return (
            <li className="fl" key={id} onClick={()=>{
                dispatch(playMusic(id))
            }}>
                <div className="item-pic">
                    <img src={al.picUrl} alt=""/>
                    <div className="listen-num">
                        {this.state.num}
                    </div>
                    <div className="play-btn"></div>
                </div>
                <div className="item-name">{name}</div>
            </li>
        )
    }
}

export default connect()(ImgList)