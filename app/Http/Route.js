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

    constructor(prefix) {
        this.prefix = prefix;
        // this.init = this.init.bind(this);
        // this.get = this.get.bind(this);
        // this.post = this.post.bind(this);
    }

    init(prefix) {
        this.prefix = prefix
        var that = this;
        return (target, name, descriptor) => {
            console.log(that.prefix, 1)
        };
    }

    get(url) {
        var that = this
        return (target, name, descriptor) => {

            let action = (new (target.constructor))[name];
            app.use(route.get(that.prefix + url, action));

            return descriptor;
        }
    }

    post(url) {
        var that = this;

        return (target, name, descriptor) => {
            let action = (new (target.constructor))[name];
            app.use(route.post(that.prefix + url, action))
            return descriptor;
        }
    }
}
export default Route


