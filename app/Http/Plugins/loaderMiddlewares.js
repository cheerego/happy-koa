/**
 * Created by Admin on 2017/3/25.
 */
import fs from 'fs';
import path from 'path';
import Define from '../../../config/path'


export default () => {
    const files = fs.readdirSync(Define.MIDDLEWARE_PATH);
    files.forEach(file => {
        require(path.join(Define.CONTROLLER_PATH, file));
    })
}
