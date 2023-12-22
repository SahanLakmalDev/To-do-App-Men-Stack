
import './ShowTasks.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink} from "react-router-dom";
import { useParams } from "react-router-dom";
import {BackButton} from "../../components/BackButton.tsx";
import {Spinner} from "../../components/Spinner.tsx";
import {TaskDTO} from "../../dto/TaskDTO.ts";
export function ShowTask() {

    const API_BASE_URL="http://localhost:5555/tasks";

    const [task, setTask] = useState<TaskDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API_BASE_URL}/${id}`)
            .then((response) => {
                setTask(response.data as TaskDTO);
                setLoading(false);
            })
            .catch(error => console.error('Error showing details:', error));
        setLoading(false);
    }, [])


    return (
        <div className={"p-4"}>
            <BackButton/>
            <h1 className={"text-3xl text-center my-4"}>
                Task Details
            </h1>
            {loading ? (
                <Spinner/>
            ):(
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                  <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">ID:</span>
                    <span>{task?._id}</span>
                  </div>
                  <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Title:</span>
                    <span>{task?.title}</span>
                  </div>
                  <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Description:</span>
                    <span>{task?.description}</span>
                  </div>
                  <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Create Time:</span>
                    <span>{task?.createdAt}</span>
                  </div>
                  <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Last Update Time:</span>
                    <span>{task?.updatedAt}</span>
                  </div>
                </div>
            )}
        </div>


    );
}
