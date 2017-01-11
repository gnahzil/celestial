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
const app = new Koa();
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
//设置静态文件目录
app.use(convert(require('koa-static')('./public')));

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
