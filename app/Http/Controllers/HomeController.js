/**
 * Created by placeless on 17/3/21.
 */

class HomeController{
    async index(ctx){
        ctx.body = 'Hello home!'
    }
}
export default new HomeController;

