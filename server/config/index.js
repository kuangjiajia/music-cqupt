const path = require("path")

const PORT = 4567
const STATICPATH = path.resolve(__dirname,"../../build")

module.exports =  {
    PORT,
    STATICPATH
}