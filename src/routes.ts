import { Router } from 'https:/deno.land/x/oak/mod.ts';

import UserController from './controllers/UserController.ts';

const routes = new Router();

routes
  .get("/users", UserController.index)
  .post("/user", UserController.create)
  .put("/user/:id", UserController.update)
  .delete("/user/:id", UserController.delete)

export default routes;
