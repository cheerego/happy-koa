/**
 * Created by placeless on 17/3/21.
 */

import Route from '../Route'
import User from '../../Models/UserMode';


// @Route.init({
//     prefix: '/api'
// })
class HomeController {
  constructor() {
    this.x = 123;
    this.get = this.get.bind(this);
  }

  @Route.get('/123')
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

