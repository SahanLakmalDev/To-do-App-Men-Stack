import './EditTask.css';
import {BackButton} from "../../components/BackButton.tsx";
import {Spinner} from "../../components/Spinner.tsx";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


export function EditTask() {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {

        const fetchTaskDetails = async () => {
            try{
                setLoading(true);
                const response = await axios.get(`http://localhost:5555/tasks/${id}`);
                const taskDate = response.data;
                console.log(taskDate);
                setTitle(taskDate.title);
                setDescription(taskDate.description);


            }catch (error){
                console.error('Error fetching task details:', error);
            }finally {
                setLoading(false);
            }
        };
        fetchTaskDetails();

    }, [id]);

    const handleEditTask = () => {
        const data = {
            title,
            description,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/tasks/${id}`, data)
            .then(()=> {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to Update Task');
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
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditTask}>
                    Update Task
                </button>
            </div>
        </div>
    );
}