import mongoose from 'mongoose';
import { MONGODB_URI } from '@config/constants';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import path from 'path';

export class DB {
  lowdb: any;
  adapter: low.AdapterSync<any>;
  constructor() {
    this.adapter = new FileSync(path.join(__dirname, 'db.json'));
    this.lowdb = low(this.adapter);
    this.initLowDb();
  }

  public async initLowDb() {
    await this.lowdb.defaults({ books: [] }).write();
  }

  public async initializeMongodb() {
    try {
      await mongoose.connect(`${MONGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`Connected to mongodb`);
    } catch (err) {
      console.log(err);
      process.exit();
    }
  }
}
