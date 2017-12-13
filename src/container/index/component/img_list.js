import React from "react"

export default class ImgList extends React.Component {

    render() {
        if(this.props.mes){
            var {pic_big,title} = this.props.mes;
        }
        return (
            <li className="home-today-item">
                <div className="home-today-item-pic">
                    <img src={pic_big} alt=""/>
                    <span className="home-today-item-play"></span>
                </div>
                <div className="home-today-item-songname">{title}</div>
            </li>
        )
    }
}