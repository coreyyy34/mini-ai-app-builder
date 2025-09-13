import mongoose from "mongoose";
import { get } from "env-var";

export const connectDatabase = async () => {
	try {
		const connectionUri = get("DATABASE_URL").required().asString();
		const databaseName = get("DATABASE_NAME").required().asString();
		const connection = await mongoose.connect(connectionUri, {
			dbName: databaseName,
		});

		console.info("MongoDB connected:", connection.connection.host);
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		throw error;
	}
};
