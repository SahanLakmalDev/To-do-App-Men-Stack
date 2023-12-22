
import './DeleteTask.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {BackButton} from "../../components/BackButton.tsx";
import {Spinner} from "../../components/Spinner.tsx";
import { useNavigate, useParams } from 'react-router-dom';
import {TaskDTO} from "../../dto/TaskDTO.ts";
export function DeleteTask() {

    const [task, setTask] = useState<TaskDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const naviagate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5555/tasks/${id}`);
                const taskData = response.data;

                // Set the existing task data to the state
                setTask(taskData);
            } catch (error) {
                console.error('Error fetching book details:', error);
            } finally {
                setLoading(false);
            }
        };

        // Fetch book details when the component mounts
        fetchTaskDetails();
    }, [id]);

    const handleDeleteTask = async () => {
        try {
            setLoading(true);

            // Send a DELETE request to remove the book from the server
            await axios.delete(`http://localhost:5555/tasks/${id}`);

            // Redirect to the book list page or wherever you want to navigate after deleting
            naviagate("/");
        } catch (error) {
            console.error('Error deleting book:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={"w-full p-4"}>
            <BackButton/>
            <div className="text-center w-full flex-col justify-center m-auto ">
                <h1 className="text-3xl mb-4 text-center m-auto">Delete Task</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <p className="mb-4">Are you sure you want to delete the book titled "{task?.title}"?</p>
                        <button
                            type="button"
                            onClick={handleDeleteTask}
                            disabled={loading}
                            className={`bg-red-500 text-white py-2 px-4 rounded ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'Deleting...' : 'Delete Task'}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}