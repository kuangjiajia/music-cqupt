import React, { Component } from 'react'
import goodIc from './img/good-ic.png'
import goodIcChoose from './img/good-choose-ic.png'
import './item.less'
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: this.props.state,
            num: this.props.like
        }
        this.handleClickChange = this.handleClickChange.bind(this)
    }
    handleClickChange() {
        this.state.good === 0 ? this.setState({good: 1,num: ++this.state.num}) : this.setState({good: 0, num: --this.state.num})
    }
    render() { 
        const { songName , singer , saySth , toName , nickName , headImgUrl} = this.props
        console.log(this.state.good)
        return ( 
            <li className="item">
                <div>
                    <div className="user-icon-music">
                        <img className="u-icon" src={headImgUrl}/>
                            <div className="u-music">
                                <i></i>&nbsp;
                                {songName} - {singer}
                            </div>
                    </div>
                    <p>To {toName}</p>
                    <p className="p-content">{saySth}</p>
                    <div className="from-who">from {nickName}</div>
                    <div className="good-date">
                        <img className="good" onClick={this.handleClickChange} src={this.state.good === 0 ? goodIc : goodIcChoose }/>&nbsp;{this.state.num}
                        <div className="u-date">2018-01-02</div>
                    </div>
                </div>
            </li>
        )
    }
}
 
export default Item