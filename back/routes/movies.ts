import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/db";
import Game from "../models/movie";
import Movie from "../models/movie";

export const moviesRouter = express.Router();

moviesRouter.use(express.json());

moviesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const movies = (await collections?.movies?.find({}).toArray()) as Movie[];

        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

moviesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: ObjectId.createFromHexString(id) };
        const movie = (await collections?.movies?.findOne(query)) as Movie;

        if (movie) {
            res.status(200).send(movie);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

moviesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newMovie = req.body as Movie;
        const result = await collections?.movies?.insertOne(newMovie);

        result
            ? res.status(201).send(`Successfully created a new movie with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new movie.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

moviesRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: ObjectId.createFromHexString(id) };
        const result = await collections?.movies?.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed movie with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove movie with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Movie with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});