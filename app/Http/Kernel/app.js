/**
 * Created by placeless on 17/3/22.
 */
import Koa from 'koa';
const path = require(ROOT + 'config/path');
const app = new Koa();
app.path = path;
export default app;