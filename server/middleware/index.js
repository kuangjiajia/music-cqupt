const config = require("../config/index.js")
const bodyParser = require('koa-bodyparser')
const static = require("koa-static")
// console.log(JSON.stringify(config))

const { STATICPATH } = config

module.exports = (app) => {
    app.use(bodyParser())
    app.use(static(STATICPATH))
}