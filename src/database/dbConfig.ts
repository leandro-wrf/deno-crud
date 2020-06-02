import { Database } from 'https://deno.land/x/denodb/mod.ts';
import { Use } from '../models/User.ts'

const dbConfig = new Database('postgres', {
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'user'
})

dbConfig.link([Use])
dbConfig.sync()

export default dbConfig;
