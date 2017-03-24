/**
 * Created by placeless on 17/3/21.
 */

import Route from '../Route'
const Router = new Route('/api');
class HomeController {
    constructor() {
        // this.get = this.get.bind(this);
        // this.post = this.post.bind(this);
        // Object.getOwnPropertyNames(this).forEach(name => {
        //     console.log(typeof  this[name])
        // })
        this.x = 123
    }

    @Router.get('/123')
    async get(ctx) {
        console.log(this.x);
        await ctx.render('home.twig', {
            message: 'haha'
        })
    }


    @Router.post('/1234')
    async post(ctx) {
        await this.render('home.twig', {
            message: 'haha'
        })
    }
}
export default   HomeController;

