import React, { Component } from 'react'
import { Switch , withRouter , Route , Link , Redirect } from 'react-router-dom'
// import IndexInfor from './component/Infor/index.js'
import './indexPage.less'
import '../../mock/index.js'
import { loadNewest } from '../../action/index/index.js'
import { connect } from 'react-redux'
import Item from '../../component/Item/index.js'
import styles from './config.js'


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this.props.loadMusic()
    }
    render() { 
        const { pathname } = this.props.location
        const { pageState } = this.props
        console.log(pathname)
        return (
            <div>
                <div className="index-route">
                    <Link to={`${this.props.match.path}`} className="route-style"
                          style={pathname === `${this.props.match.path}` ? styles.choose : styles.normal}>最新动态</Link>
                    <Link to={`${this.props.match.path}/previous`} className="route-style"
                          style={pathname === `${this.props.match.path}/previous` ? styles.choose : styles.normal}>往期回顾</Link>
                </div>
                <ul className="mes-list">
                    {
                        pageState.map((item,index) => {
                            return <Item key={index}
                                        songName={item.songname}
                                        singer={item.singer}
                                        saySth={item.saySth}
                                        toName={item.toname} 
                                        nickName={item.nickname}
                                        headImgUrl={item.headimgurl}
                                        id={item.id}
                                        state={item.state}
                                        isanonymous={item.isanonymous}
                                        like={item.like}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pageState: state.Page   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMusic: () => dispatch(loadNewest(1)) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(IndexPage)