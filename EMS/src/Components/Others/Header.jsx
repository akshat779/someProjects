import React, { useContext, useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";
// import { AuthContext } from "../../Context/AuthProvider";



function Header({changeUser,data}){
    // const data = useContext(AuthContext);
    // console.log(data);
    const logOutUser = () => {
        localStorage.setItem('loggedInUser','');
        // window.location.reload();
        changeUser("");
    }

    return(
        <div className="flex items-end text-white justify-between">
            <h1 className="text-2xl font-medium">Hello <span className="text-3xl font-semibold"> {data?.firstName ? data.firstName : "Admin"} 👋</span> </h1>
            <button onClick={logOutUser} className="bg-red-500 font-medium text-lg text-white px-5 py-2 rounded-sm">Log Out</button>
        </div>
    )
}

  


export default Header;