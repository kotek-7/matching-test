import { Hono } from "hono";
import { upgradeWebSocket } from "hono/cloudflare-workers";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "*",
  }),
);

const route = app
  .get("/", (c) => {
    const value = Math.random();
    return c.json({
      ok: true,
      message: `Hello, Hono! ${value}`,
    });
  })
  .get(
    "/ws",
    upgradeWebSocket((c) => {
      return {
        onMessage(event, ws) {
          console.log("WebSocket message received:", event.data);
          const value = Math.random();
          ws.send(`Hello from the server! ${value}`);
        },
        onClose(ws) {
          console.log("WebSocket connection closed:", ws.reason);
        },
      };
    }),
  );

export default app;
export type AppType = typeof route;
