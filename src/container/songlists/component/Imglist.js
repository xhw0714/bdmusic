import React from "react";

export default class ImgList extends React.Component{
    render(){
        if(this.props.mes){
            var {pic_big,artist_name,language,country} = this.props.mes;
        }
        return (
            <li className="fl">
                <div className="item-pic">
                    <img src={pic_big} alt=""/>
                    <div className="listen-num">
                        {Math.round(Math.random()*1000000)}
                    </div>
                    <div className="play-btn"></div>
                </div>
                <div className="item-info">{language}·{country}</div>
                <div className="item-name">{artist_name}</div>
            </li>
        )
    }
}