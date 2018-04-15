import React, { Component } from 'react'
import { Switch , Route , Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Item from '../../component/Item/index'
import styles from './config.js'
import './mineInfor.less'
class MineInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { pathname } = this.props.location
        console.log(pathname)
        return (
            <div>
                <div className="aboutme">
                    <div className="green"></div>
                    <div className="user">
                        <div className="user-ic-position">
                            <img className="user-ic" />
                            <p>脱发女孩</p>
                        </div>
                    </div>
                </div>
                <div className="user-mes-list">
                    <div className="user-route">
                        <Link to={`${this.props.match.path}`} className="user-route-item"
                              style={pathname === `${this.props.match.path}` ? styles.choose : styles.normal}>已发布</Link>
                        <Link to={`${this.props.match.path}/adopt`} className="user-route-item"
                              style={pathname === `${this.props.match.path}/adopt` ? styles.choose : styles.normal}>已采纳</Link>
                    </div>
                    <ul className="mine-list">
                        <Item />
                        <Item />
                        <Item />
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(MineInfor)