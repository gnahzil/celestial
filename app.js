const Koa = require('koa');
const session = require('koa-session');
const convert = require('koa-convert');
const flash = require('koa-flash-simple')
const views = require('koa-views');
const pkg = require('./package');
const parseBody = require('koa-better-body');
const path = require('path');
const fs = require('fs');
const log4js = require('koa-log4');
const config = require('config-lite');
const app = new Koa();

//初始化log4js设置配置文件
log4js.configure('./config/log4js.json');
var log = log4js.getLogger("app");//得倒log4j句柄

//设置模板目录和引擎
app.use(views(__dirname + '/views', {
  map: {
    ejs: 'ejs'
  }
}));

//设置静态文件目录
app.use(convert(require('koa-static')('./public')));

//设置session和flash通知
app.keys=['celestial'];
app.use(convert(session(config.session,app)));
app.use(flash());

//设置上传目录
app.use(convert(parseBody({
  uploadDir: path.join(__dirname, 'public/img'),
  keepExtensions: true
})));

//设置模板中不经常改变的参数
app.use(async (ctx,next) => {
  ctx.state.blog = { 
    title: pkg.name, 
    description: pkg.description,
  };
  await next();
});

//将log4js用于koa的middleware
app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }));

//设置路由
const controller = require('./routes');
controller(app);

//处理404错误
app.use( async (ctx) => {
    if (!ctx.headerSent) {
        await ctx.render('404.ejs');
    }
});

//处理服务器错误返回页
app.on('error', async (err,ctx) => {
  await ctx.render('error.ejs');
});

//启动server监听端口
app.listen(config.port);
console.log('Server start on port ' + config.port + '...');

