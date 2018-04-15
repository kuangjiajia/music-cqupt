import React, { Component } from 'react'
import { Switch , Link , withRouter} from 'react-router-dom'
import data from './config.js'
import './nav.less'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { pathname } = this.props.location //获取当前路径
        const propList = Object.keys(data) //获取data的的属性列表
        return (
            <div className="nav">
                {
                    propList.map(item => {
                        return data[item]['toUrl'] === pathname.substring(0,data[item]['toUrl'].length) ?  <Link to={data[item]['toUrl']} className="nav-link">
                            <img src={data[item]['imgUrl1']} className="img-icon-style" alt={data[item]['text']}/>
                            <span style={{color:data[item]['color1'] }}>{data[item]['text']}</span> 
                        </Link> : <Link to={data[item]['toUrl']} className="nav-link">
                            <img src={data[item]['imgUrl0']} className="img-icon-style" alt={data[item]['text']}/>
                            <span style={{color:data[item]['color0'] }}>{data[item]['text']}</span> 
                        </Link> 
                    })
                }
            </div>
        )
    }
}
 
export default withRouter(Nav)
