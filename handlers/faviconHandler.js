const path = require('path');

const faviconHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/favicon.ico'))
}

module.exports = faviconHandler;