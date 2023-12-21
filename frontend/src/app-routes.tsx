import {createBrowserRouter, Navigate, redirect, RouteObject} from "react-router-dom";
import {Home} from "./views/home/Home.tsx";
import {CreateTask} from "./views/create-tasks/CreateTask.tsx";
import {ShowTask} from "./views/show-tasks/ShowTask.tsx";
import {DeleteTask} from "./views/delete-task/DeleteTask.tsx";
import {EditTask} from "./views/edit-task/EditTask.tsx";

const routes:RouteObject[] = [
    {
        index:true,
        element:<Navigate to={"home"}></Navigate>
    },
    {
        path:'home',
        Component:Home,
    },
    {
        path:'tasks/create',
        Component:CreateTask
    },
    {
        path:'tasks/details/:id',
        Component:ShowTask
    },
    {
        path:'tasks/delete/:id',
        Component:DeleteTask
    },
    {
        path:'tasks/edit/:id',
        Component:EditTask
    }
];
export const router = createBrowserRouter(routes);

