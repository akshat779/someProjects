import React from "react";

function CreateTask(){
    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form className="flex w-full flex-wrap items-start justify-between">
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Task Title</h3>
                            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI Design" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Date</h3>
                            <input className=" text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 " type="date" / >
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Assign To</h3>
                            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Category</h3>
                            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Design, Dev,etc" />
                        </div>
                    </div>

                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm font-semibold text-gray-300 mb-0.5">Task Description</h3>
                        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10"></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-em mt-4 w-full font-semibold">Create Task</button>
                    </div>
                </form>
            </div>
    )
}

export default CreateTask;