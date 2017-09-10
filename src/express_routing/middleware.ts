import * as express from 'express';
import { ExtendedRequest, User } from './interfaces';

export function create(username) {
    return (request: ExtendedRequest, response: express.Response, next: express.NextFunction) => {
      // Add a user object to the request
      request.user = {name: username} as User;
      next();
    }
}
