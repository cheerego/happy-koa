/**
 * Created by placeless on 17/3/22.
 */
import views from 'koa-views';
import Define from '../../../config/define'
const view = views(Define.VIEW_PATH, {extension: 'twig'})
export default view