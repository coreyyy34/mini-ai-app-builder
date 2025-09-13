import { get } from "env-var";
import dotenv from "dotenv";

dotenv.config();

export { connectDatabase } from "./database";
export const PORT = get("PORT").default("3000").asPortNumber();
