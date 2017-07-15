import axios, {AxiosResponse} from 'axios';
import {User, UserService, userServiceFactory} from './Services';

const env = process.env.NODE_ENV;
console.log(`Environment: `, env ? env : 'prod');
const service: UserService = userServiceFactory();
const id = 5;
service.getUserById(id).then((user: User) => console.log(`User: ${id}`, user));
service.getAllUsers().then((user: User[]) => console.log('All users:', user));
