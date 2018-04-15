import React, { Component } from 'react'
import { connect } from 'react-redux'
import { subMusic } from '../../action/music/index'
import './addMusic.less'
class AddMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "warnStuText": "",
            "warnSongText": "",
            "warnSingerText": "",
            "warnNameText": "",
            "songName": "",
            "singer": "",
            "toStuid": "",
            "toName": "",
            "saySth": "",
            "openid": "ouRCyjk_lS-puvJHTIiYyItWMt74",
            "isAnonymous": 0     
        }
        this.handleInputMusicChange = this.handleInputMusicChange.bind(this)
        this.handleInputSingerChange = this.handleInputSingerChange.bind(this)
        this.handleInputToNameChange = this.handleInputToNameChange.bind(this)
        this.handleInputToStuIdChange = this.handleInputToStuIdChange.bind(this)
        this.handleInputToContentChange = this.handleInputToContentChange.bind(this)
        this.submitState = this.submitState.bind(this)
        this.onBlurStu = this.onBlurStu.bind(this)
        this.onBlurSinger = this.onBlurSinger.bind(this)
        this.onBlurSong = this.onBlurSong.bind(this)
        this.onBlurName = this.onBlurName.bind(this)
        this.anonymousChange = this.anonymousChange.bind(this)
    }
    handleInputMusicChange(e) {
        this.setState({
            "songName": e.target.value
        })
    }
    handleInputSingerChange(e) {
        this.setState({
            "singer": e.target.value
        })
    }
    handleInputToNameChange(e) {
        this.setState({
            "toName": e.target.value
        })
    }
    handleInputToStuIdChange(e) {
        this.setState({
            "toStuid": e.target.value
        })
    }
    handleInputToContentChange(e) {
        this.setState({
            "saySth": e.target.value
        })
    }
    submitState() {
        const { toStuid , songName , toName , singer , saySth } = this.state 
        if(toStuid.length === 10 && songName.length !== 0 && singer.length !== 0 && toName.length !== 0) {
            this.props.commitMes({
                toStuid,
                songName,
                toName,
                singer,
                saySth
            })
            this.setState({
                toStuid: "",
                songName: "",
                toName: "",
                singer: "",
                saySth: ""
            })
            alert("点歌成功")
        }else {
            this.onBlurName()
            this.onBlurSinger()
            this.onBlurSong()
            this.onBlurStu()
            alert("您的输入有误～～");
        }
    }
    onBlurStu() {
        this.state.toStuid.length !== 10 ? this.setState({"warnStuText": "请输入正确的学号位数～～"}) : this.setState({"warnStuText": ""})
    }
    onBlurSong() {
        this.state.songName.length === 0 ? this.setState({"warnSongText": "输入不能为空～～"}) : this.setState({"warnSongText": ""})
    }
    onBlurName() {
        this.state.toName.length === 0 ? this.setState({"warnNameText": "输入不能为空～～"}) : this.setState({"warnNameText": ""})
    }
    onBlurSinger() {
        this.state.singer.length === 0 ? this.setState({"warnSingerText": "输入不能为空～～"}) : this.setState({"warnSingerText": ""})
    }
    anonymousChange() {
        this.state.isAnonymous === 0 ? this.setState({isAnonymous: 1}) : this.setState({isAnonymous: 0})
    }
    render() { 
        return (
            <div className="add-music-container">
                <div className="tmp"></div>
                <ul className="add-music">
                    <li className="add-music-input">
                        <h3>歌曲名</h3>
                        <input type="text" placeholder="请输入15字以内的歌曲～～" maxLength="15"
                               onBlur={this.onBlurSong.bind(this)}
                               value={this.state.songName} 
                               onChange={this.handleInputMusicChange}/>
                        <p>{this.state.warnSongText}</p>
                    </li>
                    <li className="add-music-input">
                        <h3>演唱者</h3>
                        <input type="text" placeholder="请输入演唱者姓名～～"
                               onBlur={this.onBlurSinger.bind(this)}
                               value={this.state.singer} 
                               onChange={this.handleInputSingerChange}/>
                        <p>{this.state.warnSingerText}</p>
                    </li>
                    <li className="add-music-input">
                        <h3>对方姓名</h3>
                        <input type="text" placeholder="请输入对方姓名～～"
                               onBlur={this.onBlurName.bind(this)}
                               value={this.state.toName} 
                               onChange={this.handleInputToNameChange}/>
                        <p>{this.state.warnNameText}</p>
                    </li>
                    <li className="add-music-input">
                        <h3>对方学号</h3>
                        <input type="text" placeholder="请输入对方学号～～" maxLength="10"
                               value={this.state.toStuid} 
                               onBlur={this.onBlurStu.bind(this)}
                               onChange={this.handleInputToStuIdChange}/>
                        <p>{this.state.warnStuText}</p>
                    </li>
                    <li className="add-music-textarea">
                        <h3>想说的话</h3>
                        <textarea rows="4" cols="37" maxLength="50"
                                  placeholder="请输入想说的话，不超过50个字～～"
                                  value={this.state.saySth}
                                  onChange={this.handleInputToContentChange}>
                        </textarea>
                    </li>
                    <li className="add-music-btn" onClick={this.submitState}>
                        我要点歌
                    </li>
                    <p className="add-muci-anony">
                        <span>
                            <input type="checkbox" onChange={this.anonymousChange}/>
                        </span>&nbsp;匿名
                    </p>
                </ul>
            </div>
        )
    }
}

const mapDispatchToprops = dispatch => ({
    commitMes: json => dispatch(subMusic(json))
})
 
export default connect(null,mapDispatchToprops)(AddMusic)