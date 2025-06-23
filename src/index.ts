import { Hono } from "hono";
import type { ContextVariables } from "./constants";
import { createInMemoryApp } from "./controllers/main";

const app = createInMemoryApp();

export default app;export const authApp = new Hono<ContextVariables>();

