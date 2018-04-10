const Router = require("koa-router")
const router = new Router()
const controller = require("../controller/index.js")
module.exports = app => {
    router.get("/api/music",controller.music)
    app.use(router.routes())
       .use(router.allowedMethods()) 

}