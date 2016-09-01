/**
 * Simple express app in TypeScript.
 *
 * Transpile to JavaScript:
 * npm run build
 *
 * Run program:
 * node index.js
 *
 * Browse to:
 * http://localhost:3000/hello
 *
 */
import * as express from 'express';
import {create} from './middleware';
import { ExtendedRequest } from './interfaces';

let app: express.Express = express();

// Use a middleware function defined in middleware.js
// The use() function inserts the function in the middleware pipeline
app.use(create('James'));

app.get('/hello', (request: ExtendedRequest, response: express.Response) => {

    // create() adds user property
    response.send(`Hello ${request.user.name}`); //passing a string assumes HTML output,
                      // passing a JavaScript object assumes you want to send JSON output
});

app.listen(3000);



