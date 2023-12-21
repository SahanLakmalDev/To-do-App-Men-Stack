import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
const app = express();
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
//# sourceMappingURL=main.js.map