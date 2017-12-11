import React,{ Component } from 'react';
import { BrowerRouter as Router, Route, Link } from 'react-router'

export default class extends Component{

    render(){
        return (
            <nav>
                <ul>
                    <li><Link to="/classify"></Link></li>
                    <li><Link to="/singer"></Link></li>
                    <li><Link to="/top"></Link></li>
                    <li><Link to="/mine"></Link></li>
                </ul>
            </nav>
        )
    }
}
