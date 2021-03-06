import { RouterContext, BodyReader } from 'https:/deno.land/x/oak/mod.ts';
import { User } from '../models/User.ts';

class UserController {
  async index(context: RouterContext):Promise<any> {
    const data = await User.all();

    return context.response.body = data;
  }

  async create(context: RouterContext):Promise<any> {
    const { value } = await context.request.body({
      contentTypes: {
        json: ["application/javascript"],
      }
    })

    try {
      await User.create({
        user: value.user
      })
    } catch (error) {
      return console.log(error)
    }

    return context.response.body = { message: value }
  }

  async update(context: RouterContext): Promise<any> {
    const id = context.params.id;
    const { value } = await context.request.body({
      contentTypes: {
        json: ["application/javascript"]
      }
    })

    try {
      await User.where('id', id).update('user', value.user)
    } catch (error) {
      return console.log(error)
    }

    return context.response.body = value
  }

  async delete(context: RouterContext): Promise<any> {
    const id = context.params.id;

    try {
      await User.where('id', id).delete();
    } catch (error) {
      return console.log(error)
    }

    return context.response.body = { message: 'User deleted'}
  }
}

export default new UserController();