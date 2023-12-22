
import './Home.css';
import {Link, NavLink} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Spinner} from '../../components/Spinner.tsx'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import {TaskDTO} from "../../dto/TaskDTO.ts";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {TaskTable} from "../../home/TaskTable.tsx";
import {TaskCard} from "../../home/TaskCard.tsx";

export function Home() {

    const API_BASE_URL="http://localhost:5555/tasks";

    const [tasks, setTasks] = useState<TaskDTO[]>([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

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
        <div className={"p-4 max-w-7xl m-auto"}>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 rounded-lg text-xl mt-3'
                    onClick={() => setShowType('table')}>
                    Table
                </button>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 rounded-lg text-xl mt-3'
                    onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>

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
                showType === 'table'? <TaskTable tasks={tasks}/> : <TaskCard tasks={tasks} />
            )}


        </div>
    );
}
