/**
 * Created by placeless on 17/3/21.
 */

import {get, post} from '../routes'
class HomeController {
    @get('/123')
    async get(ctx) {
        await this.render('home.twig', {
            message: 'haha'
        })
    }


    @post('/1234')
    async post(ctx) {
        await this.render('home.twig', {
            message: 'haha'
        })
    }
}
export default  new HomeController;

