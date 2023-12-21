import express from "express";
import Task from "../model/taskModel.js";
const router = express.Router();
//Function to save a task
const saveTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        if (!title) {
            return res.status(400).json({
                message: "Title is required."
            });
        }
        //Create a new task
        const newTask = new Task({
            title,
            description,
        });
        //Save the task to the database
        await newTask.save();
        return res.status(201).json(newTask);
    }
    catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
//Function to get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({
            count: tasks.length,
            data: tasks,
        });
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
// Route: Create a new task
router.post("/", saveTask);
// Route: Get all tasks
router.get("/", getAllTasks);
export default router;
//# sourceMappingURL=taskRoutes.js.map