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
//Function to get a single task by ID
const getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json(task);
    }
    catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
//Function to update a task by ID
const updateTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        if (!(req.body.title || req.body.description)) {
            return res.status(400).json({
                message: "Provide at least one field to update: title or description",
            });
        }
        const updatedTask = await Task.findByIdAndUpdate(taskId, {
            ...(req.body.title && { title: req.body.title }),
            ...(req.body.description && { description: req.body.description }),
        }, {
            new: true,
        });
        if (!updatedTask) {
            return res.status(404).json({ message: "No task found with this ID" });
        }
        return res.status(200).json(updatedTask);
    }
    catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
//Function to delete a task by ID
const deleteTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        // return res.status(200).json(deletedTask);
    }
    catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
// Route: Create a new task
router.post("/", saveTask);
// Route: Get all tasks
router.get("/", getAllTasks);
// Route: Get a single task by ID
router.get("/:id", getTaskById);
// Route: Update a task by ID
router.put("/:id", updateTaskById);
// Route: Delete a task by ID
router.delete("/:id", deleteTaskById);
export default router;
//# sourceMappingURL=taskRoutes.js.map