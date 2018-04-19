module.exports = () => {
    return async (ctx,next) => {
        // if(ctx.req.url.s !== "/api/music") {
            ctx.response.redirect("/index.html")
            // await next()
        // }else{
            // await next()
        // }
    }
}