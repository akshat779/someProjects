import Login from "./Components/Auth/Login"
import {useContext, useState,useEffect} from "react"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./Context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";


function App() {
  const[user,setUser] = useState(null);
  const[loggedInUserData,setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  // localStorage.clear();
  useEffect(()=> {
      const loggedInUser = localStorage.getItem("loggedInUser");
      const storedUserData = localStorage.getItem("userData");
      if(storedUserData){
        setUserData(JSON.parse(storedUserData));  
      }
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      }
    
  },[])      

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}));
    }
    else if(userData){
      const employee = userData.find((employee) => employee.email == email && employee.password == password)
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
    {user == 'admin' ? <AdminDashboard changeUser = {setUser} /> : ""} 
    {user == 'employee' ? <EmployeeDashboard changeUser = {setUser} data={loggedInUserData}/> : ""}
    </>
  )
}

export default App
