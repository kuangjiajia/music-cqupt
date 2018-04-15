const path = require("path")

const PORT = 6789
const STATICPATH = path.resolve(__dirname,"../../build")

module.exports =  {
    PORT,
    STATICPATH
}