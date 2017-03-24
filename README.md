# Hello-koa
This is a koa mvc template via es6 include some middlewares like route,twig,static and so on.

## Structure
```
.
├── app
│   ├── Bootstarp.js
│   └── Http
│       ├── Controllers
│       ├── Kernel
│       ├── Middleware
│       ├── Plugins
│       └── Route.js
├── app.js
├── bower.json
├── config
│   ├── db.js
│   └── path.js
├── database
│   └── drivers
│       ├── mongodb.js
│       └── mysql.js
├── logs
│   └── readme.md
├── package.json
├── public
│   ├── css
│   ├── error.twig
│   ├── images
│   └── js
├── resources
│   └── views
├── server.js
└── README.md
```

## Controller
```
import Route from '../Route'

@Route.init({
    prefix: '/api'
})
class HomeController {
    constructor() {
        this.x = 123
    }

    @Route.get('/123')
    async get(ctx) {
        await ctx.render('home.twig', {
            message: 'haha'
        })
    }

    @Route.post('/1234')
    async post(ctx) {
        await this.render('home.twig', {
            message: 'haha'
        })
    }
}
export default   HomeController;

```

## Install
```
yarn or npm install 
npm run super
```

## Run
```
http://localhost:3000/api/123
```