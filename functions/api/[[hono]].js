import { handle } from "hono/cloudflare-pages";
import app from '#server/app.ts'

// connect hono app with cloudflare pages request handler
export const onRequest = handle(app);

