/**
 * Created by placeless on 17/3/21.
 */

import route  from 'koa-route';
import app from './Kernel/app'
const get = (url) => {
    return (target, name, descriptor) => {
        app.use(route.get(url, (new (target.constructor))[name]))
        return descriptor;
    }
}
const post = (url) => {
    return (target, name, descriptor) => {
        app.use(route.post(url, (new (target.constructor))[name]))
        return descriptor;
    }
}

export {
    get, post
}

