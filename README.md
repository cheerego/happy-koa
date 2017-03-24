# Hello-koa
This is a koa mvc template via es6 include some middlewares like route,twig,static and so on.

## Structure
```
├── README.md
├── app
│   ├── Bootstarp.js
│   └── Http
├── app.js
├── bower.json
├── config
│   ├── db.js
│   └── path.js
├── database
│   └── drivers
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
└── server.js

12 directories, 10 files
MacBook-Pro :: ~/FrontEnd/koa-template » tree -L 3 
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