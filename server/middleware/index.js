const config = require("../config/index.js")
const bodyParser = require('koa-bodyparser')
const staticPath = require("koa-static")
const autoRoute = require("./route/index.js")
// console.log(JSON.stringify(config))

const { STATICPATH } = config

module.exports = (app) => {
    app.use(bodyParser())
    app.use(staticPath(STATICPATH,{
    	proxy: "/cquptMusic"
    }))

    // app.use(staticPath(STATICPATH))
    // app.use(autoRoute())

    console.log(STATICPATH)
}