import * as assert from 'assert';
import * as console from 'console';
import { Collection, createConnection } from 'mongoose';
import { UserSchema } from './schema';
import { User } from './domain-model';
const users: User[] =  require('./users.json');

const DB_URL = 'mongodb://localhost/persons'
const COLLECTION_NAME = 'customers';

// Use native promises
// require('mongoose').Promise = global.Promise;

const db = createConnection(DB_URL);

const UsersModel = db.model('UsersModel', UserSchema, COLLECTION_NAME);

try {
  saveUsers(UsersModel, users);
  // saveUserDocument(UsersModel, users[2]);
} catch(err) {
  db.close();
  console.error('ERROR: Saving users', err);
  throw err;
}
db.close();


function validateUserByUserId(id: number) {
  let user;
  // create a new connection
  const db2 = createConnection(DB_URL);
  const UsersModel2 = db2.model('UsersModel2', UserSchema, COLLECTION_NAME);
  UsersModel2.findOne({'id': id}, (error, document ) => {
    if (error) {
      throw new Error(error);
    }
    user = document;
    assert(user.id === id, `Failed to find user with id ${id}`);
    console.log(`User with id ${id} found`);
    db2.close();
  });
}

function saveUserDocument(model, user) {
  return new Promise((resolve, reject) => {
    let entry = new model(user);
    entry.save((err, document) => {
      if (err) {
        // throw new Error(err);
        reject(err);
      }
      console.log(`MongoDB User created for user ${document.name} (${document.id})`);
      // return document;
      resolve(document);
    });
  });
}

function saveUsers(model, users) {
    const promises = users.map(user => saveUserDocument(model, user));
    console.log('PROMISES', promises);
    Promise.all(promises);
  }

// function dropCustomersCollection(collection: Collection) {
//   return collection.drop()
// }
