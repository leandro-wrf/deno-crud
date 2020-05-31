import { Router } from 'https:/deno.land/x/oak/mod.ts';

const routes = new Router();

routes.get("/", (context):any => {
    context.response.body = "Hello world!";
  })

export default routes;
