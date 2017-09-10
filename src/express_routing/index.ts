/**
 * Simple express app in TypeScript.
 */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {create} from './middleware';
import { ExtendedRequest } from './interfaces';

let app: express.Express = express();

// Use a middleware function defined in middleware.js
// The use() function inserts the function in the middleware pipeline
// create() adds user property to the request
app.use(create('Jane'));
// Support JSON
app.use(bodyParser.json());
// Support HTML forms
app.use(bodyParser.urlencoded({ extended: true }));

// serve an html file
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html')
});

// serve a request with a query string parameter 'name'
app.get('/hello', (request: ExtendedRequest, response: express.Response) => {
    let name: string = request.query.name;
    if (!name) {
        name = request.user.name;
    }
    //passing a string assumes HTML output,
    response.send(`Hello ${name}<div><a href="/">Home</a></div>`);

    // passing a JavaScript object assumes
    // you want to send JSON output.
    // response.send(request.user);

});

app.listen(3000, () => console.log('Application running on port 3000'));
