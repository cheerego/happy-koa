/**
 * Created by placeless on 17/3/22.
 */
import fs from 'fs';
import path from 'path';
import Define from '../../../config/path'


export default () => {
    const files = fs.readdirSync(Define.CONTROLLER_PATH);
    files.forEach(file => {
        require(path.join(Define.CONTROLLER_PATH, file));
    })
}
