const router = require('koa-router')();
const checkLogin = require('../middlewares/check').checkLogin;

module.exports = function(app) {

    router.get('/', async (ctx) => {
        ctx.redirect('/index');
    });
    router.get('/index', async (ctx) => {
        await ctx.render('index.ejs');
    });
    app.use(router.routes());

    app.use(require('./signup'));
    app.use(require('./signin'));
    app.use(require('./signout');

   //demo
    router.get('/api/fb', async (ctx) => {
        await require("../services/fb.js")();
        console.log("success");
        ctx.body="{'type':'ret','status':'success'}";
    });
    app.use(router.routes());
};