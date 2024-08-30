import { handle } from "hono/cloudflare-pages";
import { app } from '#backend/app'

// connect hono app with cloudflare pages request handler
export const onRequest = handle(app);

