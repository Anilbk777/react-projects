import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData?.employees);

  function handleLogIn(email, password) {
    if (
      authData &&
      authData?.employees?.find(
        (employee) => employee.email == email && employee.password == password,
      )
    ) {
      console.log("This is an employee1");
      setUser("employee");
    } else if (
      authData?.admin?.find(
        (user) => user.email == email && user.password == password,
      )
    ) {
      console.log("This is an admin");
      setUser("admin");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user && <Login handleLogIn={handleLogIn} />}

      {user === "employee" && <EmployeeDashboard />}
      {user === "admin" && <AdminDashboard />}
    </>
  );
};

export default App;
