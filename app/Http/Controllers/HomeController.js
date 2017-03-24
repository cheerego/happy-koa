/**
 * Created by placeless on 17/3/21.
 */

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

