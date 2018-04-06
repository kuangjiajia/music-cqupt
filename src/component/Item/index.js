import React, { Component } from 'react'
import goodIc from './img/good-ic.png'
import './item.less'
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { songName , singer , saySth , toName } = this.props
        return ( 
            <li className="item">
                <div>
                    <div className="user-icon-music">
                        <img className="u-icon" />
                            <div className="u-music">
                                <i></i>&nbsp;
                                {songName} - {singer}
                            </div>
                    </div>
                    <p>To {toName}</p>
                    <p className="p-content">{saySth}</p>
                    <div className="from-who">from kuangjiajia</div>
                    <div className="good-date">
                        <img className="good" src={goodIc}/>&nbsp;13
                        <div className="u-date">2018-01-02</div>
                    </div>
                </div>
            </li>
        )
    }
}
 
export default Item