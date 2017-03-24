/**
 * Created by placeless on 17/3/21.
 */
'use strict';
import path from 'path';
const ROOT = path.dirname(__dirname);
const LOG_PATH = path.join(ROOT, 'logs','access.log');
const PUBLIC_PATH = path.join(ROOT, 'public');
const APP_PATH = path.join(ROOT, 'app');
const CONTROLLER_PATH = path.join(APP_PATH, 'Http', 'Controllers');
const MIDDLEWARE_PATH = path.join(APP_PATH, 'Http', 'Middleware');
const VIEW_PATH = path.join(ROOT, 'resources', 'views');
export default {
    ROOT,
    LOG_PATH,
    PUBLIC_PATH,
    APP_PATH,
    CONTROLLER_PATH,
    MIDDLEWARE_PATH,
    VIEW_PATH
};