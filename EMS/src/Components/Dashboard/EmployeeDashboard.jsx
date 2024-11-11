import React from "react";
import Header from "../Others/Header";
import TaskList from "../Tasklist/TaskList";
import TaskListNumbers from "../Others/TaskListNumbers";
import AllTask from "../Others/AllTask";

function EmployeeDashboard({data}){
    return(
        <div className="p-10 bg-[#1c1c1c] h-screen ">
            <Header data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployeeDashboard;