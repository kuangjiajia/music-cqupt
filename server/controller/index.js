// const  { reqMusic } = require("./music/index.js")
const musicUrl = "http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&%20n=5&aggr=1&cr=1&loginUin=0&format=json&%20inCharset=GB2312&outCharset=utf-8&notice=0&%20platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&%20remoteplace=sizer.newclient.next_song&w=%E5%91%A8%E6%9D%B0%E4%BC%A6"
const http = require("http")
module.exports = {
    music: async (ctx,next) => {
        http.get(musicUrl,(req,res) => {
            var html='';  
            req.on('data',function(data){  
                html+=data;  
            });  
            req.on('end',function(){
                var jsonData = JSON.parse(html)  
                console.log(jsonData.data.song.list) 
                ctx.response.type = 'text/html'
                ctx.response.body = JSON.stringify(jsonData.data.song.list)
            }); 
        })
    }
}