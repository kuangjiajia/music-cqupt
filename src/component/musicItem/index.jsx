import React, { Component } from 'react'
import "./musicItem.less"
import stop from './img/stop.png'
import start from './img/start.png'
class MusicItem extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	    	stateMusic: 0,
	    	currentTime: 0,
			duration: 1,
			status: 1,
			musicTimeNow: 0,
			totalTime: 0
		}
		this.formatTime = this.formatTime.bind(this)
	}
	formatTime(time) {
		const minute = parseInt(time / 60)
		let seconds = parseInt(time % 60)
		if(seconds <= 9) {
			seconds = "0" + seconds
		}
		return `${minute}:${seconds}`
	}
	componentDidMount() {
		this.audio = document.querySelector(".audioClass")
		this.musicLogo = document.querySelector(".music-logo")
		this.musicLogo.addEventListener("click",() => {
			if(this.state.status === 1) {
				this.setState({
					status: 0
				})
				this.audio.play()
			}else{
				this.setState({
					status: 1
				})
				this.audio.pause()
			}
		})
		// this.audio.addEventListener("play",(e) => {
		// 	this.setState({
		// 		duration: e.target.duration,
		// 		totalTime: this.formatTime(e.target.duration)
		// 	})
		// })
		this.audio.addEventListener("timeupdate",(e) => {
			this.setState({
				duration: e.target.duration,
				totalTime: this.formatTime(e.target.duration),
				currentTime: e.target.currentTime,
				musicTimeNow: this.formatTime(e.target.currentTime)
			})
		})
	}
	render() {
		return (
			<div>
				<div className="music-play">
					<audio className="audioClass" >
						<source src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3"
								className="audio-lass" 
								/>
					</audio>
					<p>天空之城 - 蒋敦豪</p>
					<progress value={this.state.currentTime} 
							  className="process-class"
							  max={this.state.duration}>
					</progress>
					<ul>
						<li>{this.state.musicTimeNow === 0 ? "" : this.state.musicTimeNow}</li>
						<li className="music-logo">
							<img src={this.state.status === 0 ? stop : start} alt="controle"/>
						</li>
						<li>{this.state.totalTime === 0 ? "" : this.state.totalTime}</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MusicItem