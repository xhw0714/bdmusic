import React , {Component} from 'react';

export default class Singer extends Component{
    render(){
        let {id,name,picUrl} = this.props.info

        return (
            <li className="clearfix" key={id} onClick={()=>{
                this.props.method(id)
            }}>
                <img src={picUrl} alt=""/>
                <span>{name}</span>
            </li>
        )
    }
}