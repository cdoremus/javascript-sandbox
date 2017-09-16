import { Schema } from 'mongoose';

const GeoSchema = new Schema({
  lat: Number,
  lng: Number
});

export const AddressSchema = new Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: {type: GeoSchema}
});

export const CompanySchema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String
});

export const UserSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {type: AddressSchema},
  company: {type: CompanySchema}
});
