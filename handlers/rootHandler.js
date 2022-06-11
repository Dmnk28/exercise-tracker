const path = require('path');

const rootHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
}

module.exports = rootHandler;