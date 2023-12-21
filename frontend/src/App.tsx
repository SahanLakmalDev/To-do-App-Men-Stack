
import './App.css'
import {router} from "./app-routes.tsx";
import React from "react";
import {RouterProvider} from "react-router-dom";

function App() {


  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
