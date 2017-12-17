import React , {Component} from 'react';

import {connect} from 'react-redux'
import {playMusic} from './../../../actions/index'
class SearchItem extends Component {

    render(){
        let {id,name,artists} = this.props.info

        let artist = '';
        artists.forEach((e,i) => {
            if(i>=1){
                artist += ' & ' +  e.name
            }else{
                artist += e.name
            }
        });
        let {dispatch} = this.props
        return (
            <li onClick={()=>{
                dispatch(playMusic(id))
            }}>
                <div className="fl">
                    <span className="song-name">{name}</span>
                    <span className="singer">{artist}</span>
                </div>
                <div className="down fr"></div>
            </li>
        )
    }
}

export default connect()(SearchItem)