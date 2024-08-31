import app from "./server/app";
import { z } from "zod";

// const PORT = process.env.PORT || 5150
const ServeEnv = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/, "Port must be a numeric string")
    .default("5150")
    .transform(Number),
});
const ProcessEnv = ServeEnv.parse(process.env);


const server = Bun.serve({
  port: ProcessEnv.PORT,
  // hostname: "0.0.0.0",
  hostname: "127.0.0.1",
  // hostname: "localhost",
  // port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  // hostname: "mydomain.com", // defaults to "0.0.0.0"
  fetch: app.fetch,
});


console.log(`Server running at ${server.url} on port ${server.port}`);
console.log(`API running at ${server.url}api on port ${server.port}`);



