import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

function AllTask(){

    const [userData,setUserData] = useContext(AuthContext);
    // console.log(userData);
    return(
   
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
            <div className="bg-red-400 mb-2 py-4 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium w-1/5 text-white">Employee Name</h2>
                    <h3 className="text-lg font-medium w-1/5 text-white">New Task</h3>
                    <h5 className="text-lg font-medium w-1/5 text-white">Active Task</h5>
                    <h5 className="text-lg font-medium w-1/5 text-white">Completed</h5>
                    <h5 className="text-lg font-medium w-1/5 text-white">Failed</h5>
            </div>

            <div className="">
           {userData.map((employee,idx) => {
            return <div key={idx} className=" border-2 border-emerald-400 mb-2 py-4 px-4 flex justify-between rounded">
                    <h2 className="text-lg font-medium w-1/5 text-white ">{employee.firstName}</h2>
                    <h3 className="text-lg font-medium w-1/5  text-blue-600">{employee.taskCounts.newTask}</h3>
                    <h5 className="text-lg font-medium w-1/5  text-yellow-400">{employee.taskCounts.active}</h5>
                    <h5 className="text-lg font-medium w-1/5  text-white">{employee.taskCounts.completed}</h5>
                    <h5 className="text-lg font-medium w-1/5  text-red-600">{employee.taskCounts.failed}</h5>
                </div>
           })}
           </div>
            
            {/* <div className="bg-green-400 mb-2 py-4 px-4 flex justify-between rounded">
                <h2>Askaht</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-purple-400 mb-2 py-4 px-4 flex justify-between rounded">
                <h2>Askaht</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-blue-400 mb-2 py-4 px-4 flex justify-between rounded">
                <h2>Askaht</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div>
            <div className="bg-yellow-400 mb-2 py-4 px-4 flex justify-between rounded">
                <h2>Askaht</h2>
                <h3>Make a UI design</h3>
                <h5>Status</h5>
            </div> */}
        </div>
    )
}

export default AllTask;