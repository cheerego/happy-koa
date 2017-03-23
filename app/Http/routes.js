/**
 * Created by placeless on 17/3/21.
 */

import route  from 'koa-route';
import app from './Kernel/app'

const get = (url) => {
    return (target, name, descriptor) => {
        let action = (new (target.constructor))[name];
        app.use(route.get(url, action))
        return descriptor;
    }
}
const post = (url) => {
    return (target, name, descriptor) => {
        let action = (new (target.constructor))[name];
        app.use(route.post(url, action))
        return descriptor;
    }
}

export {
    get, post
}

