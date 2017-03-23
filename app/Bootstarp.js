/**
 * Created by placeless on 17/3/21.
 */

const port = process.env.PORT || 3000
import app from './Http/Kernel/app'
// import serve from 'koa-static';
// import route from 'koa-route';
// import logger from 'koa-logger2';
// import error from 'koa-error';
// import onerror from 'koa-onerror';
// import fs from 'fs';
// import path from 'path';
// import views from 'koa-views';
import loaderControllers from './Http/plugins/loaderControllers'
import view from './Http/Middleware/view'
import logger from './Http/Middleware/logger';
import serveStatic from './Http/Middleware/static';
import onerror from './Http/Middleware/error';

class Bootstrap {
    constructor() {
        this.app = app;
        // this.app.use((ctx,next) => {
        //     ctx.body = 'Hello World!!';
        //     console.log(ctx.path)
        //     return  next()
        // });
        this.__initDebug();
        this.__initMiddleware();
        this.__initDatabase();
        this.__initRoute();
        this.__initController();
    }
    __initDebug() {
    }

    __initMiddleware() {

        this.app.use(view);
        this.app.use(logger);
        this.app.use(serveStatic);
        onerror(this.app);
    }

    __initDatabase() {

    }

    __initRoute() {
    }


    __initController() {
        loaderControllers();
    }

    start() {
        this.app.listen(port, () => {
            console.log('started at %s:  - port:%s', new Date, port)
        });
    }


}


export default Bootstrap;

