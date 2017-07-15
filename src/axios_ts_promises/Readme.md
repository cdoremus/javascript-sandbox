## Experiments with Axios, Promises and TypeScript

This folder holds code to experiment with the HTTP client library [Axios](https://github.com/mzabriskie/axios) and [ES6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) in [TypeScript](https://www.typescriptlang.org/).

Axios, an HTTP client library, does asynchronous HTTP requests returning the data in a Promise, but the Axios Promise does not follow the ES6 Promise TypeScript interface, so the returned code from an Axios.get() or Axios.post() call must be wrapped in an ES6 Promise. This repo explores doing that.

The repo creates an interface `UserService` to access user data. The interface is implemented by `RemoteUserService` using Axios and `LocalUserService` using data stored in a local JSON file. It is anticipated that `LocalUserService` will be used in tests while `RemoteUserService` will be used in deployed 'production' code.

The `userServiceFactory()` is designed to select the proper `UserService` depending on the value of the `NODE_ENV` Node environmental variable. `NODE_ENV=test` indicates the test environment. If `NODE_ENV` is not set, a production environment is assumed.

To run the code:
```
# install dependencies
npm install

# run local service
npm start

# run remote service
npm run rstart

```
