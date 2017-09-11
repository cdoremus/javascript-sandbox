import * as mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  code: String,
  capital: String,
  adjacent: [String]
});

export default schema;
