/**
 * Created by placeless on 17/3/21.
 */
class HomeController {
    async index(ctx) {
        await this.render('404.twig', {
            message: 'haha'
        })
    }
}
export default new HomeController;

