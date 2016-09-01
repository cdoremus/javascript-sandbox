# Node Hello World using the Express Library #
This folder holds JavaScript (js folder) and TypeScript (ts folder) examples of the basic use of the Express library to create a simple web server.

Both Javascript and TypeScript versions require you to install dependencies using npm:
```bash
npm install
```
The TypeScript code will need to be transpiled to JavaScript. To do that you will need to invoke the following command in the ts folder
```bash
npm run build
```
To run the application, invoke this command in either the js or ts folder:
```bash
node index.js
```
Once node starts the server, you can browse to
<a href="http://localhost:3000/hello">http://localhost:3000/hello</a>.

The JavaScript version displays 'Hello James'.

The TypeScript version is fleshed out with an ability to accept a query string containing a 'name' parameter.
If the parameter is not used, 'Hello World' will be shown. Here's the URL to use:
<a href="http://localhost:3000/hello?name=James">http://localhost:3000/hello?name=James</a>
with James replaced witn any other string you want to display with 'Hello'.

## Notes on installing TypeScript typings ##
For future reference, here is how to configure the TypeScript typings:
* Install typings from npm (I installed globally): npm install -g typings
* Do 'typings init' to create a typings.json file
* Install each typing using the command: 'typings install dt~module_name --save --global'
where module_name is the name of the module to install.
Each install adds a record to typings.json.
    * Do 'typings search node' to search for typings.
    If they are found with a dt source, then you can add them using 'dt~' with the install comand.
    A typings search result with an npm source would use 'npm~' instead.

* Modules installed for this simple node/express app included:
    * node
    * express
    * express-serve-static-core
    * static-core
    * mime
* Run 'typings install' to install the typings in the typings folder
* Run the build: 'npm run build' to transpile the TypeScript to JavaScript.
    * I got an error about missing IterableIterator, but it did not cause problems with running the app in node.
    * I later checked the error message and the missing IterableIterator type was part of a deprecated interface.