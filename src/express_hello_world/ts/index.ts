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
 * http://localhost:3000/hello?name=Craig
 *
 * In this case, 'Hello Craig' will be displayed. If no query
 * parameter is used, then 'Hello World' will be displayed, which
 * has been added to the request by the create function.
 *
 */
import * as express from 'express';
import {create} from './middleware';
import { ExtendedRequest } from './interfaces';

let app: express.Express = express();

// Use a middleware function defined in middleware.js
// The use() function inserts the function in the middleware pipeline
// create() adds user property to the request
app.use(create('Foobar'));

app.get('/hello', (request: ExtendedRequest, response: express.Response) => {
    // Get value of name from query string parameter
    // http://localhost:3000/hello?name=Foobar
    let name: string = request.query.name;
    if (!name) {
        name = request.user.name;
    }
    //passing a string assumes HTML output,
    response.send(`Hello ${name}`);

    // passing a JavaScript object assumes
    // you want to send JSON output.
    // response.send(request.user);

});

app.listen(3000);
