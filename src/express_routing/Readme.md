# Routing using the Express Library and TypeScript#
This folder holds TypeScript code demoing how to do routing with the NodeExpress library.

Install dependencies using the `yarn` or `npm install`
commands.

Start the server using `yarn start` or `npm start`

Once the server is started, you can browse to
<a href="http://localhost:3000/hello">http://localhost:3000/hello</a>.

This code is fleshed out in TypeScript with an ability to accept a query string containing a 'name' parameter.
If the parameter is not used, 'Hello World' will be shown. Here's the URL to use:
<a href="http://localhost:3000/hello?name=Jane">http://localhost:3000/hello?name=Jane</a>. You can replace the value of the `name` query string parameter with any other string you want to display on the web page pre-appended by 'Hello'.

This application demonstrates the use of Express middleware and routing.
* The middleware in this case sets up the default value of the `name` query string parameter. TypeScript is used here to internally represent the value as a type-safe `User` object.
* The r
.......................................................................


Note how I used the interface `ExtendedRequest` which extends the Express `Request` interface to type check a `user` query parameter used in the `app.get()` call in `index.ts`.

