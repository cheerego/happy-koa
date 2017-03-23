/**
 * Created by Admin on 2017/3/23.
 */
import Koa from 'koa';
class Cheer {
    middelwareList=[]

    constructor() {
        this.app = new Koa()
    }

    set  middleware(middle) {
        this.app.use(middle)

    }

    get path() {

    }
}
