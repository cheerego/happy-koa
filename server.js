/**
 * Created by placeless on 17/3/21.
 */
require('babel-core/register');
require('babel-polyfill');
// require the rest of the app that needs to be transpiled after the hook
// global.ROOT = __dirname+'/';
const app = require('./app');