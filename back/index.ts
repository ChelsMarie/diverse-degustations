import express from "express";
import { moviesRouter } from "./routes/movies";
import { connectToDatabase } from "./services/db";

const app = express();
const port = 5050; // default port to listen

async function startDatabase() {
    await connectToDatabase();
    try {
        app.use("/movies", moviesRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    }

    catch (error: unknown) {
        console.error("Database connection failed", error);
        process.exit();
    }
 
}

startDatabase();

