const request = require("superagent")
const http = require("http")
const https = require("https")
const fs = require("fs")
const musicListUrl = (musicName) => {
    return `https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&key=${musicName}&g_tk=345488810&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`
}
const musicUrl = (mid) => {
    return `https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songmid=${mid}&tpl=yqq_song_detail&format=json&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`
}

module.exports = {
    music: async (ctx,next) => {
        const { musicName } = ctx.request.query
        const musicList = musicListUrl(encodeURIComponent(musicName))
        // console.log(encodeURI(musicList))
        const dt = await request.get(musicList)
        // console.log(JSON.parse(dt.res.text).data)
        // console.log(JSON.parse(dt))
        const dataList = JSON.parse(dt.res.text).data.song.itemlist
        // console.log(dataList)
        const dataMid = dataList[0].mid
        const newMusic = musicUrl(dataMid)
        const newData = await request.get(newMusic)
        const videoUrl = Object.values(JSON.parse(newData.res.text).url)[0]
        // console.log(videoUrl)
        ctx.response.type = "json"
        ctx.response.body = {
            videoUrl
        }
    },
    index: async (ctx,next) => {
        const dt  = fs.readFileSync("/home/idsbllp/node/music-cqupt/build/index.html","utf8")
        ctx.response.type = "text/html"
        ctx.response.body = dt
    },
}