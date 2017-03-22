/**
 * Created by placeless on 17/3/21.
 */


import Define from '../../../config/define'
import get from '../routes'
class HomeController {
    @get('/123')
     async index(ctx) {
        await this.render('home.twig', {
            message: 'haha'
        })
    }
}
export default  new HomeController;

