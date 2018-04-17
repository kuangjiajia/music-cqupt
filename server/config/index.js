const path = require("path")

const PORT = 5678
const STATICPATH = path.resolve(__dirname,"../../build")

module.exports =  {
    PORT,
    STATICPATH
}