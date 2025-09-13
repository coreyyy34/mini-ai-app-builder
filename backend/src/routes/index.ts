import { Router } from "express";
import { healthCheck } from "../controller/health";

const router = Router();

router.get("/health", healthCheck);

export default router;
