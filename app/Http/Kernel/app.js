/**
 * Created by placeless on 17/3/22.
 */
import Koa from 'koa';
const path = require('../../../config/path');
const app = new Koa();
app.keys = ['41974873@qq.com'];
app.path = path;
export default app;
