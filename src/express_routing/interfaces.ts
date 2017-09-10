import * as express from 'express';

/**
 * Extend Request object in the Express library to add a user
 * object.
 */
export interface ExtendedRequest extends express.Request {
    user: User;
}

/**
 * Interface representing a user with a name proeprty.
 */
export interface User {
    id: number;
    name: string;
    email: string;
}


