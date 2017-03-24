/**
 * Created by placeless on 17/3/22.
 */
import serve from 'koa-static';
import Define from '../../../config/path'
const serveStatic = serve(Define.PUBLIC_PATH);
export default serveStatic
