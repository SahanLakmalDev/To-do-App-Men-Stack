import mongoose, { Schema } from "mongoose";
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
}, {
    timestamps: true,
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
//# sourceMappingURL=taskModel.js.map