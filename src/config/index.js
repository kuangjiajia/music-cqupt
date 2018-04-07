class URI {
	constructor(uri) {
		this.uri = uri
	}
	addQuery(name,prop) {
		this.uri += this.uri.includes("?") ?  "" : "?"
		if(typeof name !== "string") {
			Object.entries(name).forEach((item,index) => {
				this.uri += item[0] + "=" + item[1] + "&"
			})
		}else {
			this.uri += name + "=" + prop + "&"
		}
		return this
	}
	hash(val) {
        this.uri += "#" + val
        return this
    }
    toString() {
        return this.uri.substring(0,this.uri.length - 1)
	}
	query() {
		const newStr = this.uri.substring(this.uri.indexOf("?")+1,this.uri.length)
		const arr = newStr.split("&")
		const newObj = {}
		arr.forEach(item => {
			newObj[item.split("=")[0]] = item.split("=")[1]
		})
		return newObj
	}
}
const wxData = {
	// "appID": "wx81a4a4b77ec98ff4"
	"appID": "wx14933ed9b6667149"
}

function generateGetCodeUrl(redirectURL) {
	return new URI("https://open.weixin.qq.com/connect/oauth2/authorize")
			.addQuery("appid",wxData.appID)
	        .addQuery("redirect_uri", redirectURL)
	        .addQuery("response_type", "code")
	        .addQuery("scope", "snsapi_userinfo")
	        .addQuery("response_type", "code")
            .hash("wechat_redirect")
            .toString()
}

export { generateGetCodeUrl , URI }