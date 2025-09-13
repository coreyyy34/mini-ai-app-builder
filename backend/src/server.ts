import { connectDatabase, PORT } from "./config";
import app from "./App";

const startServer = async () => {
	try {
		await connectDatabase();
		app.listen(PORT, () => {
			console.info(`Server running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Failed to start server", error);
		process.exit(1);
	}
};

startServer();
