import React, { Component } from 'react'
import "./musicItem.less"
class MusicItem extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	    	stateMusic: 0
	    }
	    this.togglePlayer = this.togglePlayer.bind(this)
	    this.showProcess = this.showProcess.bind(this)
	  	// this.getAudio = this.getAudio.bind(this)
		this.pauseMusic = this.pauseMusic.bind(this)
	}
	// getAudio(audio) {
	// 	this.audio = audio
	// 	console.log(audio)
	// }
	togglePlayer() {

	}
	showProcess() {

	}
	pauseMusic() {

	}
	startMusic() {
		
	}
	componentDidMount() {
		this.audio = document.querySelector(".audioClass")
		this.stop = document.querySelector(".stopClass")
		this.start = document.querySelector(".startClass")
		this.stop.addEventListener("click", () => {
			this.audio.pause()
		})
		this.start.addEventListener("click",() => {
			this.audio.play()
		})
	}
	render() {
		return (
			<div>
				<div>一千个伤心的理由</div>
				<audio src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3"
					   className="audioClass"
				>
				</audio>
				<progress value="80" max="100" className="processClass"></progress>
				<p></p>
				<button onClick={this.pauseMusic}
						className="stopClass"
						>
					暂停
				</button>
				<button onClick={this.startMusic}
						className="startClass"
						>
					开始
				</button>
			</div>
		)
	}
}

export default MusicItem