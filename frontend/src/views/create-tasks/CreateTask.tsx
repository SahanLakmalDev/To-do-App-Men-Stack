
import "./CreateTask.css";
import React, { useState } from "react";
import axios from "axios";
import {BackButton} from "../../components/BackButton.tsx";
import {Spinner} from "../../components/Spinner";
import { useNavigate } from 'react-router-dom';
export function CreateTask() {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Function to handle form submission
    const handleCreateTask = () => {
        const data = {
            title,
            description,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/tasks', data)
            .then(()=> {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to Create Task');
                setLoading(false);
            })
    }

    return (
        <div className={"p-4"}>
            <BackButton/>
            <h1 className='text-3xl my-4 text-center'>Create Task</h1>
            {loading ? <Spinner /> : ''}
            <div className={"flex flex-col border-2 border-sky-400 rounded-xl max-w-2xl p-4 mx-auto"}>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Description</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2  w-full '
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleCreateTask}>
                    Save
                </button>
            </div>

        </div>
    );
}