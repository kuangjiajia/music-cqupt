const request = require("superagent")
// const musicUrl = "http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&%20n=5&aggr=1&cr=1&loginUin=0&format=json&%20inCharset=GB2312&outCharset=utf-8&notice=0&%20platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&%20remoteplace=sizer.newclient.next_song&w=%E5%91%A8%E6%9D%B0%E4%BC%A6"
// const musicUrl = "https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&key=%E4%B8%80%E5%8D%83%E4%B8%AA%E4%BC%A4%E5%BF%83%E7%9A%84%E7%90%86%E7%94%B1&g_tk=849914434&jsonpCallback=SmartboxKeysCallbackmod_top_search5084&loginUin=992207219&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
const http = require("http")
const https = require("https")
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
        console.log(JSON.parse(dt.res.text).data)
        // console.log(JSON.parse(dt))
        const dataList = JSON.parse(dt.res.text).data.song.itemlist
        console.log(dataList)
        const dataMid = dataList[0].mid
        const newMusic = musicUrl(dataMid)
        const newData = await request.get(newMusic)
        const videoUrl = Object.values(JSON.parse(newData.res.text).url)[0]
        console.log(videoUrl)
        ctx.response.type = "text/json"
        ctx.response.body = {
            videoUrl
        }
    }
}