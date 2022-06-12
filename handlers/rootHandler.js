import path from 'path';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rootHandler = (req, res) => {
    res.sendFile(path.join(dirname, '/../public/index.html'));
}

export default rootHandler;