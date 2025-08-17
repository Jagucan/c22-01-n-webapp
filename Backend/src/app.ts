import app from "./config/app.config";
import { AppDataSource } from "./config/database.config";

const port = 4000;

async function startServer() {
	try {
		await AppDataSource.initialize()
			.then(() => {
				console.log("Database connection established");
			})
			.catch((error) => console.error("Database connection error", error));

		app.listen(port, () =>
			console.log(`Server is running at http://localhost:${port}`)
		);
	} catch (err) {
		if (err instanceof Error) {
			console.error("Error starting the server:", err.message);
		}
	}
}

startServer();
