import {TaskDTO} from "../dto/TaskDTO.ts";
import {TaskCardSignal} from "./TaskCardSignal.tsx";

interface TaskTableProps {
    tasks: TaskDTO[];
}
export function TaskCard({tasks}:TaskTableProps) {
    return (
        <div className={"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
            {tasks.map((task) => (
                <TaskCardSignal key={task._id} task={task}/>
            ))}

        </div>
    );
}