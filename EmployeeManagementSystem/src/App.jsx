import React, { useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";

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
