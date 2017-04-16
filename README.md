# Hello-koa
This is a koa mvc template via es6 include some middlewares like route,twig,static and so on.

# Development
```
node > 7.6 (koa-bodyparser require node version > 7.6)
```
## Structure
```
.
├── app
│   ├── Bootstarp.js
│   ├──Models
│   │     └── UserModels.js
│   ├──Services
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
@Route.init({
    prefix: '/api'
})
class HomeController {
  constructor() {
    this.x = 123;
    this.get = this.get.bind(this);
  }

  @Route.get('/')
  async get(ctx) {
    let user = await User.create({name: 123});

    await ctx.render('home.twig', {
      message: 'haha'
    })
  }

  @Route.post('/123')
  async post(ctx) {
    ctx.body = ctx.request.body;
  }
}

export default HomeController;

```

## Install
```
yarn or npm install 
npm run dev
```

## Run
```
http://localhost:3000/
```
