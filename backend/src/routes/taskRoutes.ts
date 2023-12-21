import express, {Request, Response} from "express";
import Task, {TaskType} from "../model/taskModel.js";

const router = express.Router();


//Function to save a task
const saveTask = async (req:Request, res:Response) => {
    const { title, description }:TaskType = req.body;

    try{
        if(!title){
            return res.status(400).json({
                message:"Title is required."
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

    }catch (error){
        console.error("Error creating task:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}





// Route: Create a new task
router.post("/", saveTask);

export default router;
