/**
 * Created by placeless on 17/3/21.
 */

import route  from 'koa-route';
import app from './Kernel/app'

let get = (url) => {
    return (target, name, descriptor) => {
        let action = (new (target.constructor))[name];
        app.use(route.get(url, action))
        return descriptor;
    }
}
let post = (url) => {
    return (target, name, descriptor) => {
        let action = (new (target.constructor))[name];
        app.use(route.post(url, action))
        return descriptor;
    }
}

class Route {

    init(prefix) {
        return (target, name, descriptor) => {
            this.prefix = prefix
            console.log(this.prefix,1)
        };
    }

    get(url) {
        return (target, name, descriptor) => {
            let action = (new (target.constructor))[name];
            app.use(route.get(this.prefix + url, action))
            console.log(this.prefix,2)
            return descriptor;
        }
    }

    post(url) {
        return (target, name, descriptor) => {
            let action = (new (target.constructor))[name];
            app.use(route.post(this.prefix + url, action))
            return descriptor;
        }
    }
}
export  default new Route


