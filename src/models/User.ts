import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts';

export const User = class User extends Model {
  static table = 'names'
  static timestamps = true
  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true
    },
    user: DATA_TYPES.STRING
  }
}
