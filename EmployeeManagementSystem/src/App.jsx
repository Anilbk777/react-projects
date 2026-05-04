import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

  function handleLogIn(email, password) {
    if (email === "employee1@example.com" && password == "123") {
      console.log("This is an employee1");
      setUser("employee");
    } else if (email === "admin@example.com" && password == "123") {
      console.log("This is an admin");
      setUser("admin");
    } else {
      alert("Invalid credentials");
    }
  }
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <>
      {!user ? <Login handleLogIn={handleLogIn} /> : ""}

      {/* <EmployeeDashboard/> */}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}
      {/* <AdminDashboard/>  */}
    </>
  );
};

export default App;
