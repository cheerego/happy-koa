/**
 * Created by placeless on 17/3/21.
 */

import route  from 'koa-route';
import app from './Kernel/app'
export default function get(url) {
    return (target, name, descriptor) => {
        app.use(route.get(url, descriptor.value))
        return descriptor;
    }
}


