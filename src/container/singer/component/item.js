import React , {Component} from 'react';
import {playMusic} from './../../../actions/index';
import {connect} from 'react-redux';

class item extends Component{

    render(){
        let {name,id} = this.props.info;
        let {dispatch} = this.props;
        return(
            <li className="singer-i-info" onClick={()=>{
                dispatch(playMusic(id))
            }}>
                {name}
            </li>
        )
    }
}

export default connect()(item)