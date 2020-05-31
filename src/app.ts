import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import router from './routes.ts';
import './database/dbConnection.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
