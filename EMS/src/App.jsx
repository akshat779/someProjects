import Login from "./Components/Auth/Login"
import {useContext, useState,useEffect} from "react"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./Context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";


function App() {
  const[user,setUser] = useState(null);
  const[loggedInUserData,setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // localStorage.clear();

  useEffect(()=> {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setUser(JSON.parse(loggedInUser).role);
      }
    }
  },[authData])      

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}));
    }
    else if(authData){
      const employee = authData.employees.find((employee) => employee.email == email && employee.password == password)
      if(employee){
        setUser ('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}));
      }
    }
    else{
      alert("Invalid Credentails")
    }
  }
  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ""}
    {user == 'admin' ? <AdminDashboard /> : ""} 
    {user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : ""}
    </>
  )
}

export default App
