import React, { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

function CreateTask(){

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setassignTo] = useState("");
    const [category,setCategory] = useState("");

    const [newTask,setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        const taskData = {taskTitle,taskDescription,taskDate,category,active:false, newTask:true, failed:false,completed:false}
        // setNewTask({ taskTitle,taskDescription,taskDate,category,active:false, newTask:true, failed:false,completed:false});
        const data = userData;
        data.forEach((elem) => {
            if(assignTo === elem.firstName){
                elem.tasks.push(taskData)
                elem.taskCounts.newTask += 1;
            }
            return elem;
        })
        // setUserData(data);
        setUserData(data);
        localStorage.setItem('userData',JSON.stringify(data));

        setCategory(""); 
        setTaskDate("");
        setTaskDescription("");
        setTaskTitle("");
        setassignTo("");
        console.log(newTask);
        console.log(userData);

    }

    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded text-white">
                <form onSubmit={(e) => submitHandler(e)} className="flex w-full flex-wrap items-start justify-between">
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Task Title</h3>
                            <input value={taskTitle} onChange={(e) => {setTaskTitle(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI Design" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Date</h3>
                            <input value={taskDate} onChange={(e) => {setTaskDate(e.target.value)}} className=" text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 " type="date" / >
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Assign To</h3>
                            <input value={assignTo} onChange={(e) => {setassignTo(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Category</h3>
                            <input value={category} onChange={(e) => {setCategory(e.target.value)}} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Design, Dev,etc" />
                        </div>
                    </div>

                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Task Description</h3>
                        <textarea value={taskDescription} onChange={(e) => {setTaskDescription(e.target.value)}} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10"></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-em mt-4 w-full font-semibold">Create Task</button>
                    </div>
                </form>
            </div>
    )
}

export default CreateTask;