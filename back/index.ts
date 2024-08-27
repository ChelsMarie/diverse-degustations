import express from "express";
import { connectToDatabase } from "./services/db"
import { moviesRouter } from "./routes/movies";

const app = express();
const port = 5050; // default port to listen

connectToDatabase()
    .then(() => {
        app.use("/movies", moviesRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });