import axios from 'axios'
import qs from 'qs'
class API {
    constructor() {
    }
    async getNewest(pageNum) {
        // return await axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/main/latest??",{
        //     params:{
        //         pageSize: 10,
        //         pageNum
        //     }  
        // })

        return await axios.get("/demo")

    }  
    async getReview(pageNum) {
        return await axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/review??",{
            params: {
                pageSize: 10,
                pageNum
            }
        })
    }
    async subMusic(json) {
        return await axios.post("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/main/song",qs.stringify(json))
    }
    async getPublish(pageNum) {
        return await axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/main/myRelease??",{
            params: {
                pageSize: 10,
                pageNum
            }
        })
    }
    async getAdopt(pageNum) {
        return await axios.get("https://wx.idsbllp.cn/test-proxy-rewrite-root/Vodplatform/main/myAdoption??",{
            params: {
                pageSize: 10,
                pageNum
            }    
        })
    }
    // async getUserMes(code) {
    //     return await axios.get
    // }
}

export default new API()