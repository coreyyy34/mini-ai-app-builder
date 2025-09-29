import { Router } from "express";
import { healthCheck } from "../controller/health";
import { captureRequirementsHandler } from "../controller/capture";
import { generateUiHandler } from "../controller/generate";
import { projectByIdHandler, projectsHandler } from "../controller/projects";

const router = Router();

router.get("/health", healthCheck);
router.post("/capture", captureRequirementsHandler);
router.post("/generate", generateUiHandler);
router.get("/projects", projectsHandler);
router.get("/projects/:id", projectByIdHandler);

export default router;
