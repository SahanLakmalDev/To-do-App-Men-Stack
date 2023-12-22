
import { NavLink } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import {BsCardText, BsCheckCircle, BsInfoCircle} from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import React, { useState } from 'react';
import {TaskDTO} from "../dto/TaskDTO.ts";


export function TaskCardSignal({task}:any) {

    const [showModel, setShowModel] = useState(false);
    return (
        <div key={task._id}
             className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
        >
            <div className='flex justify-start items-center gap-x-2'>
                <BsCheckCircle className='text-purple-800 text-2xl'/>
                <h2 className='my-1'>{task.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BsCardText className='text-red-300 text-2xl'/>
                <h2 className='my-1'>{task.description}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <NavLink to={`/tasks/details/${task._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
                </NavLink>
                <NavLink to={`/tasks/edit/${task._id}`}>
                    <AiOutlineEdit className='text-2xl text-orange-800 hover:text-black'/>
                </NavLink>
                <NavLink to={`/tasks/delete/${task._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-800 hover:text-black'/>
                </NavLink>
            </div>

        </div>
    );
}