/**
 * Created by placeless on 17/3/21.
 */

const port = process.env.PORT || 3000
import Koa from 'koa';
import serve from 'koa-static';
import route from 'koa-route';
import logger from 'koa-logger2';
// import error from 'koa-error';
// import onerror from 'koa-onerror';
import fs from 'fs';
import path from 'path';
import views from 'koa-views';
import HomeController from './Http/Controllers/HomeController'


class Bootstrap {
    constructor() {
        this.app = new Koa();

        // this.app.use((ctx,next) => {
        //     ctx.body = 'Hello World!!';
        //     console.log(ctx.path)
        //     return  next()
        // });

        this.__initDebug();
        this.__initMiddleware();
        this.__initDatabase();
        this.__initView();
        this.__initRoute();




    }

    __initDebug() {
        /**
         * logger
         */
        let log_middleware = logger('ip [day/month/year:time zone] "method url protocol/httpVer" status size "referer" "userAgent" duration ms custom[unpacked]');
        log_middleware.setStream(fs.createWriteStream(path.join(path.dirname(__dirname), 'logs/log.log'), {flags: 'a'}));
        this.app.use(log_middleware.gen);

        /**
         * static
         */
        this.app.use(serve(__dirname + '/static'))

        this.app.on('error', error => console.log(error));

        /**
         * onerror
         */
        // onerror(this.app);

        /**
         * error
         */
        // this.app.use(error({
        //     engine: 'twig',
        //     template: path.dirname(__dirname) + '/public/error.twig'
        // }));
    }

    __initMiddleware() {
    }

    __initDatabase() {

    }


    __initRoute() {
        this.app.use(route.get('/', HomeController.index));
    }


    __initView() {
        this.app.use(views(path.dirname(__dirname) + '/resources/views', {extension: 'twig'}))
    }

    start() {
        this.app.listen(port, () => {
            console.log('started at %s:  - port:%s', new Date, port)
        });
    }

}


export default Bootstrap;

