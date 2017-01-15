const router = require('koa-router')();
const sha1 = require('sha1');

const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.prefix('/signup');
router.post('/', checkNotLogin, async (ctx) => {
    
});