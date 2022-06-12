import path from 'path';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const faviconHandler = (req, res) => {
    res.sendFile(path.join(dirname, '/../public/favicon.ico'))
}

export default faviconHandler;