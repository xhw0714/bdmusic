import React,{Component} from "react";
import {artists} from './../../methods/methods'
import './style/index.css';
import Singer from './component/singer'

export default class arrtists extends Component{
    constructor(){
        super();
        this.state = {
            singers:[]
        }
        this.changeRoute = this.changeRoute.bind(this);
    }
    componentWillMount() {
        artists()
            .then((data)=>{
                this.setState({
                    singers:data.list.artists
                })
            })
    }

    changeRoute(id){
        this.props.history.push(`/singer/${id}`)
    }
    render(){

        let {singers} = this.state;
        let list = singers.map((e)=>{
            return <Singer info ={e} key={e.id} method={this.changeRoute}/>
        })

        return (
            <div className="singer">
                {/* <ul className="check-box clearfix">
                    <li className="check-item active">全部</li>
                    <li className="check-item">华语</li>
                    <li className="check-item">欧美</li>
                    <li className="check-item">韩国</li>
                    <li className="check-item">日本</li>
                    <li className="check-item">其他</li>
                </ul>
                <ul className="check-box clearfix">
                    <li className="check-item active">全部</li>
                    <li className="check-item">男</li>
                    <li className="check-item">女</li>
                    <li className="check-item">组合</li>
                </ul> */}
                <div className="singers">
                    {/* <h3 className="singers-title">热门</h3> */}
                    <ul>
                        {list}
                        {/* <li className="clearfix">
                            <img src={require('./img/246669444 (1).jpg')} alt=""/>
                            <span>薛之谦</span>
                        </li>
                        <li className="clearfix">
                            <img src={require('./img/246669444 (1).jpg')} alt=""/>
                            <span>薛之谦</span>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}