// const mongoose = require('mongoose');
// const appUserSchema = require('../lib/mongo').appUserSchema;
// const log = require('koa-log4').getLogger('mongo');

// const appUserModel = mongoose.model('appUserModel', appUserSchema);

// module.exports = {
//     //注册一个用户
//     create: function create(user) {
//         const appUserEntity = new appUserModel({
//             _app_id: user.id,
//             _app_name: user.name,
//             _app_password: user.password,
//             _app_repo_url: user.repoUrl
//         });
//         appUserEntity.save( (err)=> {
//             if (err) {
//                 log.error(err);
//             }
//         })
//     }

//     // //通过用户名获取用户信息
//     // getUserByName: function getUserByName(name) {
//     //     return User.findOne({name: name}).addCreateAt().exec();
//     // }
// };