
import './Home.css';
import {Link, NavLink} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Spinner} from '../../components/Spinner.tsx'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {TaskDTO} from "../../dto/TaskDTO.ts";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";

export function Home() {

    const API_BASE_URL="http://localhost:5555/tasks";

    const [tasks, setTasks] = useState<TaskDTO[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(API_BASE_URL)
            .then((response) => {
                setTasks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })

    }, []);



    return (
        <div className={"p-4"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-3xl my-8"}>
                    Tasks List
                </h1>
                <NavLink to={"/tasks/create"}>
                    <MdOutlineAddBox className={"text-sky-500 text-4xl"} />
                </NavLink>
            </div>
            {loading ? (
                <Spinner/>
            ):(
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
            )}


        </div>
    );
}
