import * as mongoose from 'mongoose';
import * as assert from 'assert';
import { Collection, createConnection } from 'mongoose';
import { UserSchema, UserModel } from './schema';
import { User } from './domain-model';
const users: User[] =  require('./users.json');

const DB_URL = 'mongodb://localhost/persons'
const COLLECTION_NAME = 'customers';

// Use native promises
// Use of require() is a TypeScript workaround
require('mongoose').Promise = global.Promise;

mongoose.connect(DB_URL);

let count = 0;
// save users
saveUsers(users)
  .then(doc => {
    // validate that 10 users have been inserted
    UserModel.find({}).exec()
      .then(customers => {
        assert(customers.length === 10, 'Ten inserted users were not found')
        mongoose.disconnect();
      })
      .catch(error => {
        mongoose.disconnect();
        console.error('QUERY ERROR ', error);
        throw error;
      });
  })
  .catch(e => {
    mongoose.disconnect();
    console.error('Create error', e);
  });

function saveUserDocument(user) {
  return UserModel.create(user);
}

function saveUsers(users) {
  const promises = users.map(user => saveUserDocument(user));
  return Promise.all(promises);
}
