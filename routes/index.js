const router = require('koa-router')();

module.exports = function(app) {
   //demo
    router.get('/api/fb', async (ctx) => {
        await require("../services/fb.js")();
        console.log("success");
        ctx.body="{'type':'ret','status':'success'}";
    });
    app.use(router.routes());
};