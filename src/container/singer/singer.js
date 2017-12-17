import React,{Component} from "react";
import './style/index.css';
import Item from './component/item'
import {artistsSong} from './../../methods/methods'

export default class Singer extends Component {
    constructor(){
        super();
        this.state = {
            picLink:'',
            name:'',
            list:[]
        }
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        artistsSong({
            id
        }).then((data)=>{
            
            this.setState({
                picLink:data.artist.picUrl,
                name:data.artist.name,
                list:data.hotSongs
            })
        })
    }

    render(){
        let {list,picLink,name} = this.state;
        
        let l = list.map((e)=>{
            return <Item info={e} key={e.id}/>
        })

        return (
            <div>
                <div className="singer-head">
                    <img src={picLink} alt=""/>
                    <span>
                        {name}
                    </span>
                </div>
                <ul className="ul-s">
                    {l}
                </ul>
            </div>
        )
    }
}