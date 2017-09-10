import * as express from 'express';
import { ExtendedRequest } from './interfaces';

export function create(username) {
    return (request: ExtendedRequest, response: express.Response, next: express.NextFunction) => {
      // Add a user object to the request
      request.user = {name: username};
      next();
    }
}
