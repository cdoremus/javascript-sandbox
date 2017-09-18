/**
 * Simple express api.
 */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {create} from './middleware';
import { ExtendedRequest, User } from './interfaces';
const users: User[] = require('./users.json');

let app: express.Express = express();

// Support JSON input
app.use(bodyParser.json());
// Support HTML forms
app.use(bodyParser.urlencoded({ extended: true }));

// set public/api folder as the app root
app.use('/', express.static('public/api'));

// Sending back JSON
// Passing a JavaScript object assumes
// you want to send JSON output.
// In this case, the JSON is loaded
// from the file users.json
app.get('/users', (request: express.Request, response: express.Response) => {

    response.send(users);

});

// routing with parameters - userId in this case
app.get('/user/:userId', (request: express.Request, response: express.Response) => {
        const id = request.params['userId'];
        console.log('UserId', id);
        if (!id) {
            response.sendStatus(404);
        }
        const user = users[id - 1];
        if (!user) {
            response.sendStatus(404);
        }
        response.send(user);
});

app.post('/user', (request: express.Request, response: express.Response) => {
    const user: User = {
        id: request.body.id,
        name: request.body.name,
        email: request.body.email
    }
    console.log('User posted: ', user);
    // TODO: Persist the user....

    //send back user as JSON
    response.json(user);
});


app.listen(3000, () => console.log('Application running on port 3000'));
