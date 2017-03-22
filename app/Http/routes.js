/**
 * Created by placeless on 17/3/21.
 */

import route  from 'koa-route';
import app from './Kernel/app'
const get = (url) => {
    return (target, name, descriptor) => {
        app.use(route.get(url, descriptor.value))
        return descriptor;
    }
}
const post = (url) => {
    return (target, name, descriptor) => {
        app.use(route.post(url, descriptor.value))
        return descriptor;
    }
}

export {
    get, post
}

