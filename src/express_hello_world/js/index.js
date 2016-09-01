/**
 * Simple express app
 *
 * Run program:
 * node index.js
 *
 * Browse to:
 * http://localhost:3000/hello
 *
 */
const express = require('express');
const mid = require('./middleware');

let app = express();

// Use a middleware function defined in middleware.js
// The use() function inserts the function in the middleware pipeline
app.use(mid('James'));

app.get('/hello', (request, response) => {
    response.send(`Hello ${request.user.name}`); //passing a string assumes HTML output,
                      // passing a JavaScript object assumes you want to send JSON output
});

app.listen(3000);