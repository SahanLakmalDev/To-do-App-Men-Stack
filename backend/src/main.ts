import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
import cors from 'cors';

const app = express();
//Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to to do app");
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error connecting to the database", error);
    });

