import React from "react";

function FailedTask({title,desciption,taskDate}){
    return(
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
                <h4 className="text-sm">{taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">
                {title}
            </h2>
            <p className="text-sm mt-2">
                {desciption}
            </p>
            <div className="mt-4">
                <button className="bg-red-500 py-1 px-2 text-sm rounded-full ">Failed Task</button>
            </div>
        </div>
    )
}

export default FailedTask;