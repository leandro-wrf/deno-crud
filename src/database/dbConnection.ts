import { DATA_TYPES, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('postgres', {
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'user',
});

class User extends Model {
  static table = 'users';
  static timestamps = true;
  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DATA_TYPES.STRING
  }
}

db.link([User])
await db.sync({drop: true})


export default db;
