const Koa = require("koa")
const middleware = require("./middleware/index.js")
const app = new Koa()

middleware(app)

app.listen(6789,async () => {
    console.log("server is working at http://localhost:9300")
})