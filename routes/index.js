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
}