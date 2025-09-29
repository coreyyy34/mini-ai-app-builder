import mongoose from "mongoose";
import { get } from "env-var";
import Logger from "../utils/logger";

export const connectDatabase = async () => {
	try {
		const connectionUri = get("DATABASE_URL").required().asString();
		const databaseName = get("DATABASE_NAME").required().asString();
		const connection = await mongoose.connect(connectionUri, {
			dbName: databaseName,
		});

		Logger.info("MongoDB connected:", connection.connection.host);
	} catch (error) {
		Logger.error("Error connecting to MongoDB:", error);
		throw error;
	}
};
