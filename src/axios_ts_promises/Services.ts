import axios, {AxiosResponse} from 'axios';
import {findUserById} from './util';

// get local users from file
const users: Array<User> = require('./users.json');

export interface User {
  id: number;
  name: string;
  email: string;
}

export const userServiceFactory = (): UserService => {
  if(process.env.NODE_ENV === 'test') {
    return new LocalUserService();
  } else {
    return new RemoteUserService();
  }
}

export interface UserService {
  getUserById(id: number): Promise<User>;
  getAllUsers(): Promise<User[]>;
}

export class LocalUserService implements UserService {

  getAllUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => resolve(users));
  }

  getUserById(id: number) {
    return new Promise<User>((resolve, reject) => {
      resolve(findUserById(users, id));
    });
  }
}

export class RemoteUserService implements UserService {
  getAllUsers(): Promise<User[]> {
    return axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(response => Promise.resolve(response.data))
      .catch(e => Promise.reject(e))
  }

  getUserById(id: number): Promise<User> {
    return axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(response => new Promise<User>((resolve, reject) => {
        try {
          resolve(findUserById(response.data, id));
        } catch(e) {
          reject(e);
        }
      }));

  }
}
