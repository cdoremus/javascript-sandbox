import {User} from './Services';


export const findUserById = (users: User[] = [], id: number): User | undefined => {
  return users.find((user: User) => user.id === id);
}
