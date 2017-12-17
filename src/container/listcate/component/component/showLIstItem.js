import React,{Component} from 'react';

export default class extends Component{

    render(){

        let {ele,index} = this.props

        return (
            <li className="song-item">
                <span className="num">{index+1}</span>
                <span className="song-name">{ele.al.name}</span>
            </li>
        )
    }
}