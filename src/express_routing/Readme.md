## Using the Express Library as a Back End
This folder holds [TypeScript](https://www.typescriptlang.org/) code showing how to setup and work with the Node [Express](https://expressjs.com/) library.

It shows how to use Express to serve dynamic content via an [EJS](http://www.embeddedjs.com/) template or as a back-end API serving
and processing JSON.

Install dependencies using `yarn` or `npm install`.

### To run Express to serve EJS templates

Invoke `yarn start` or `npm start`

To run in watch mode where the server is restarted when any file changes, invoke:
 `yarn watch` or `npm run watch`

### To run Express to serve a JSON API

Invoke `yarn start-api` or `npm run start-api`

To run the server in watch mode invoke `yarn watch-api` or `npm run watch-api`.

### When the server is started...

Browse to
[http://localhost:3000](http://localhost:3000)

Follow the directions on each 'home' page to exercise the Express back end.

This project demos the following Express features:
* How to use TypeScript with Express including dyamically compiling TypeScript to JavaScript with [ts-node](https://www.npmjs.com/package/ts-node).
* Serving static resources from a 'public' folder.
* Using Express middleware.
* Routing templated content using the Express EJS view engine.
* Routing using a URL containing a query string parameter.
* Routing using a URL containing a parameter embedded in the URL.
* Using the POST method to submit a form.
* Using the POST method to submit a form as JSON via the native fetch API (see `postFormWithFetchAPI()` in `public/api/index.html`).
* Using a GET request to obtain a JSON response.
