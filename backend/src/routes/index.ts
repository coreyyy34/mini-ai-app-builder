import { Router } from "express";
import { healthCheck } from "../controller/health";
import { captureRequirementsHandler } from "../controller/capture";
import { generateUiHandler } from "../controller/generate";

const router = Router();

router.get("/health", healthCheck);
router.post("/capture", captureRequirementsHandler);
router.post("/generate", generateUiHandler);

export default router;
