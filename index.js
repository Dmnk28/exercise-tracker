///////////////////
/* Configuration */
///////////////////
import express from 'express';
const app     = express();
const port    = 3000;

/* Set up Mongoose and Connect mongoDB */
import connectMongoDB from './config/mongoDB.js'
connectMongoDB();

/* Middleware */
import checkUserAlreadyExists from './middlewares/checkUserAlreadyExists.js';

/* Handlers */
import rootHandler from './handlers/rootHandler.js';
import faviconHandler from './handlers/faviconHandler.js';
import usersHandler from './handlers/usersHandler.js';
import exerciseHandler from './handlers/exerciseHandler.js';
import displayAllUsersHandler from './handlers/displayAllUsersHandler.js';

/* Use cors so the project is testable by freeCodeCamp */
import cors from 'cors';

/////////////
/* Routing */
/////////////
import * as url from 'url';
const dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(dirname + '/public'));

app.get('/', rootHandler);
app.get('/favicon.ico', faviconHandler)
app.get('/api/users', displayAllUsersHandler)

app.post('/api/users', checkUserAlreadyExists, usersHandler);
app.post('/api/users/:_id/exercises', exerciseHandler)
//////////////
/* Listener */
//////////////
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});