/**
 * Created by placeless on 17/3/21.
 */
class HomeController {
    async index(ctx) {
        await this.render('home.twig', {
            message: 'haha'
        })
    }
}
export default  HomeController;

