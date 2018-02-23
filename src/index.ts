import {random} from 'lodash';
import {join} from 'path';
import * as express from 'express';

/**
 * Create the express application we'll use.
 */
const title = 'sample.docker-typescript-debugging';
const app = express();
app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

/**
 * Use the 
 */
const port = process.env.PORT || 8080;

/**
 * Keep track of HTTP requests.
 */
let hit_count = 0;

/**
 * Respond to every GET request with the current count and a refresh command.
 */
app.get('/', function onGet(req, res) {

    // Try a breakpoint here:
    hit_count++;

    // Change this content for hot-reloading.
    // const random_number = 'fixed';
    const random_number = random(1000, 9999);

    console.log(`Handling request number: ${hit_count}`);

    res.render('index', {hit_count, random_number, title});
    
});

/**
 * Listen to the port and log once we're listening.
 */
app.listen(port, () => console.log(`The server is listening to port: ${port}`));
