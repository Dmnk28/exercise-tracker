///////////////////
/* Configuration */
///////////////////
const express = require('express');
const app     = express();
const port    = 3000;

/* Set up Mongoose and Connect mongoDB */
const connectMongoDB = require('./config/mongoDB');
// const UrlSet         = require('./models/urlSet');
connectMongoDB();

/* Middleware */

/* Handlers */
const rootHandler     = require('./handlers/rootHandler');
const faviconHandler  = require('./handlers/faviconHandler');

/* Use cors so the project is testable by freeCodeCamp */
const cors = require('cors');

/////////////
/* Routing */
/////////////
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', rootHandler);
app.get('/favicon.ico', faviconHandler)

//////////////
/* Listener */
//////////////
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});