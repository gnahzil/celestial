// const router = require('koa-router')();
// const sha1 = require('sha1');

// const checkNotLogin = require('../middlewares/check').checkNotLogin;
// const appUserModel = require('../models/users');

// router.prefix('/signup');
// router.post('/', checkNotLogin, async (ctx) => {
//     const id = ctx.request.fields.id;
//     const name = ctx.request.fields.name;
//     const password = ctx.request.fields.password;
//     const repoUrl = ctx.request.fields.repourl;

//     const user = {
//         id : id,
//         name : name,
//         password : password,
//         repoUrl : repoUrl
//     }

//     appUserModel.create(user);
// });