import { Router } from "express";

export const healthRouter = Router();

healthRouter.get('/health', (_req, res) => {
  // répondre { status: "ok" } en JSON
  res.json({ status: "ok" })
});


