import React,{Component} from 'react';

export default class extends Component{
    
    render(){
        return (
            <div className="item clearfix">
                <div className="pic fl">
                    <img src={require('./../img/test.jpg')} alt=""/>
                    <span></span>
                </div>
                <ul className="song-box fl">
                    <li className="song-item">
                        <span className="num">1</span>
                        <span className="song-name">背过手 - 薛之谦</span>
                    </li>
                    <li className="song-item">
                        <span className="num">2</span>
                        <span className="song-name">背过手 - 薛之谦</span>
                    </li>
                    <li className="song-item">
                        <span className="num">3</span>
                        <span className="song-name">背过手 - 薛之谦</span>
                    </li>
                </ul>
            </div>
        )
    }
}