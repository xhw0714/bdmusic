import React,{Component} from 'react';

import ShowList from './component/showLIstItem';

export default class extends Component{
    
    render(){

        let {list,picLink,type_mine} = this.props.data;
        

        let showList = list.map((e,i)=>{
            return <ShowList ele={e} index={i}  key={i}/>
        })

        return (
            <div className="item clearfix" onClick={()=>{
                this.props.methods(type_mine)
            }}>
                <div className="pic fl">
                    <img src={picLink} alt=""/>
                    <span></span>
                </div>
                <ul className="song-box fl">
                    {showList}
                    {/* <li className="song-item">
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
                    </li> */}
                </ul>
            </div>
        )
    }
}