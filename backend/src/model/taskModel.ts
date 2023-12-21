import mongoose, {Schema} from "mongoose";

export type TaskType = {
    title: string,
    description:string
};
const taskSchema = new Schema<TaskType>(
    {
        title:{
            type:String,
            required:true,
        },
        description:String,
    },
    {
        timestamps:true,
    }
);
const Task = mongoose.model<TaskType>("Task", taskSchema);

export default Task;

