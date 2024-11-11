import React,{useState} from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

function TaskList({data}) {
    // console.log(data);
    return(
       <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 text-white">

       {
        data?.tasks.map((task,idx) => {
            if(task.active){
                return <AcceptTask key={idx} title={task?.taskTitle} desciption = {task.taskDescription} taskDate = {task.taskDate} />
            }
            else if(task.completed){
                return <CompleteTask key={idx} title={task?.taskTitle} desciption = {task.taskDescription} taskDate = {task.taskDate}/>
            }
            else if(task.failed){
                return <FailedTask key={idx} title={task?.taskTitle} desciption = {task.taskDescription} taskDate = {task.taskDate}/>
            }
            else if(task.newTask){
                return <NewTask key={idx} title={task?.taskTitle} description = {task.taskDescription} taskDate = {task.taskDate}/>
            }
        })
       }
       </div>
    )
}

export default TaskList;