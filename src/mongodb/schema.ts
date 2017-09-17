import * as mongoose from 'mongoose';

const COLLECTION_NAME = 'customers';

export const GeoSchema = new mongoose.Schema({
  lat: Number,
  lng: Number
});

export const AddressSchema = new mongoose.Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: {type: GeoSchema}
});

export const CompanySchema = new mongoose.Schema({
  name: String,
  catchPhrase: String,
  bs: String
});

export const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {type: AddressSchema},
  company: {type: CompanySchema}
});

export const UserModel = mongoose.model('UserModel', UserSchema, COLLECTION_NAME);
