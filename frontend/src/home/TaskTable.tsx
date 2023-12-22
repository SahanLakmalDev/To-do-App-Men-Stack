import React from "react";
import {NavLink} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";
import {TaskDTO} from "../dto/TaskDTO.ts";

interface TaskTableProps {
    tasks: TaskDTO[];
}
export function TaskTable({tasks}:TaskTableProps) {
    return (
        <table className={"w-full border-separate border-spacing-2"}>
            <thead>
            <tr>
                <th className={"border border-slate-600 rounded-md"}>
                    No
                </th>
                <th className={"border border-slate-600 rounded-md"}>
                    Title
                </th>
                <th className={"border border-slate-600 rounded-md max-md:hidden"}>
                    Description
                </th>
                <th className={"border border-slate-600 rounded-md"}>
                    Operations
                </th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task, index) => (
                <tr key={task._id}>
                    <td className={"border border-slate-600 rounded-md text-center"}>{index + 1}</td>
                    <td className={"border border-slate-600 rounded-md text-center"}>{task.title}</td>
                    <td className={"border border-slate-600 rounded-md max-md:hidden text-center"}>
                        {task.description}
                    </td>
                    <td className={"border border-slate-600 rounded-md text-center"}>
                        <div className={"flex justify-center gap-x-4"}>
                            <NavLink to={`/tasks/details/${task._id}`}>
                                <BsInfoCircle className={"text-2xl text-green-800"} />
                            </NavLink>
                            <NavLink to={`/tasks/edit/${task._id}`}>
                                <AiOutlineEdit className={"text-2xl text-yellow-800"} />
                            </NavLink>
                            <NavLink to={`/tasks/delete/${task._id}`}>
                                <MdOutlineDelete className={"text-2xl text-red-800"} />
                            </NavLink>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>

        </table>
    );
}