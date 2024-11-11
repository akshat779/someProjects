import React from "react";

function Header({data}){

    return(
        <div className="flex items-end text-white justify-between">
            <h1 className="text-2xl font-medium">Hello <span className="text-3xl font-semibold">{data?.firstName} 👋</span> </h1>
            <button className="bg-red-500 font-medium text-lg text-white px-5 py-2 rounded-sm">Log Out</button>
        </div>
    )
}

export default Header;