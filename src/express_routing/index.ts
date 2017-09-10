/**
 * Simple express app in TypeScript.
 */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {create} from './middleware';
import { ExtendedRequest } from './interfaces';
const users = require('./users.json');

let app: express.Express = express();

// Use a middleware function defined in middleware.js
// The use() function inserts the function in the middleware pipeline
// create() adds 'user' property to the request
// whose type is the User interface
app.use(create('Jane'));
// Support JSON
app.use(bodyParser.json());
// Support HTML forms
app.use(bodyParser.urlencoded({ extended: true }));

// set public folder as the app root
app.use('/', express.static('public'));

// serve a request with a query string parameter 'name'
app.get('/hello', (request: ExtendedRequest, response: express.Response) => {
    let name: string = request.query.name;
    if (!name) {
    // ExtendedRequest extends express.Request
    // to add User object to the request
    name = request.user.name;
    }
    //passing a string assumes HTML output,
    response.send(`Hello ${name}<div><a href="/">Home</a></div>`);

});

// sending back JSON
// passing a JavaScript object assumes
// you want to send JSON output.
// In this case, the JSON is loaded
// from the file users.json
app.get('/users', (request: ExtendedRequest, response: express.Response) => {

    response.send(users);

});


app.listen(3000, () => console.log('Application running on port 3000'));