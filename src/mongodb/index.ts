import * as mongoose from 'mongoose';
import schema from './schema';

const db = mongoose.createConnection('mongodb://localhost/states');

const StatesModel = db.model('StatesModel', schema, 'states');

StatesModel.find({'code': 'ME'}, 'name capital adjacent',
  (err, resp) => {
    if(err) {
      console.error(`Problem with query:`, err);
    } else {
      console.log('Document found', resp);
    }
    db.close();
  }
);
