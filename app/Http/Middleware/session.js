/**
 * Created by placeless on 17/4/16.
 */
import koa_session from 'koa-session';

function session(app) {
  return koa_session({
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    maxAge: 86400000, /** (number) maxAge in ms (default is 1 days) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
  }, app)
}

export default session;
