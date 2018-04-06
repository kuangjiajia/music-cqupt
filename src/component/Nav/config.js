import homeIc from './img/home-ic.png'
import homeIcChoose from './img/home-ic-choose.png'
import mineIc from './img/mine-ic.png'
import mineIcChoose from './img/mine-ic-choose.png'
import musicIc from './img/music-ic.png'
import musicIcChoose from './img/music-ic-choose.png'

const data = {
    "home":{
        "imgUrl0": homeIc,
        "imgUrl1": homeIcChoose,
        "color0": "rgb(159, 159, 159)",
        "color1": "#b7d581",
        "text": "主页",
        "toUrl": "/index"
    },
    "music": {
        "imgUrl0": musicIc,
        "imgUrl1": musicIcChoose,
        "color0": "rgb(159, 159, 159)" ,
        "color1": "#b7d581" ,
        "text": "点歌",
        "toUrl": "/addMusic"   
    },
    "mine": {
        "imgUrl0": mineIc,
        "imgUrl1": mineIcChoose,
        "color0": "rgb(159, 159, 159)",
        "color1": "#b7d581",
        "text": "我的",
        "toUrl": "/mineInfor"
    }
}

export default data