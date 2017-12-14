import React,{Component} from 'react';

import ShowList from './component/showLIstItem';

export default class extends Component{
    
    render(){

        let {data} = this.props;
       
        data?data=data:data={};
        
        let list = data.song_list || [];

        let pic = "";
        if(data.billboard){
            pic = data.billboard.pic_s210
        }
        let showList = list.map((e,i)=>{
            return <ShowList ele={e} index={i}  key={e.song_id}/>
        })

        return (
            <div className="item clearfix">
                <div className="pic fl">
                    <img src={pic} alt=""/>
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