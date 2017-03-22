/**
 * Created by placeless on 17/3/22.
 */
import logger from 'koa-logger2'
import fs from 'fs';
import Define from '../../../config/define'
let log_middleware = logger('ip [day/month/year:time zone] "method url protocol/httpVer" status size "referer" "userAgent" duration ms custom[unpacked]');
log_middleware.setStream(fs.createWriteStream(Define.LOG_PATH), {flags: 'a'});

const gen = log_middleware.gen;

export default gen
