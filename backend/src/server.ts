import { connectDatabase, PORT } from "./config";
import app from "./app";
import Logger from "./utils/logger";

const startServer = async () => {
	try {
		await connectDatabase();
		app.listen(PORT, () => {
			Logger.info(`Server running on port ${PORT}`);
		});
	} catch (error) {
		Logger.error("Failed to start server", error);
		process.exit(1);
	}
};

startServer();
