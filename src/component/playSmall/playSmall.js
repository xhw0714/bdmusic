import React,{Component} from 'react';
import './style/index.css';

export default class extends Component{
    render(){
        return (
            <div className="music-play-small clearfix">
                <div 
                    className="bar-tool"
                    style={{width:30}}
                ></div>

                <div className="fl">
                    <span className="song-pic fl">
                        <img src={require('./img/pic.png')} alt=""/>
                    </span>
                    <span className="fl">
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className="fr">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}