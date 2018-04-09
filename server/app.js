const Koa = require("koa")
const middleware = require("./middleware/index.js")
const config = require("./config/index.js")
const { PORT } = config

const app = new Koa()

middleware(app)

app.listen(PORT,async () => {
    console.log(`server is working at http://localhost:${PORT}`)
})