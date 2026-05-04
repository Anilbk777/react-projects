import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInData, setLoggedInData] = useState(null);

  const authData = useContext(AuthContext);
  console.log(authData?.employees);

  useEffect(() => {
    if (authData) {
      const loggedIn = localStorage.getItem("loggedIn");

      if (loggedIn) {
        const parsed = JSON.parse(loggedIn);
        setUser(parsed.role);
        setLoggedInData(parsed.data);
      }
    }
  }, [authData]);

  function handleLogIn(email, password) {
    console.log(email, password);
    console.log("LOGIN FUNCTION TRIGGERED");
    if (!authData) {
      console.log("login failed!");
      return;
    }
    console.log("meowww");

    const employee = authData.employees?.find(
      (emp) => emp?.email === email && emp?.password == password,
    );

    const admin = authData.admin?.find(
      (adm) => adm.email === email && adm.password === password,
    );
    console.log(admin);

    // authData?.admin?.email === email && authData?.admin?.password == password;
    if (employee) {
      const payload = { role: "employee", data: employee };

      localStorage.setItem("loggedIn", JSON.stringify(payload));
      setUser(payload.role);
      setLoggedInData(payload.data);
    } else if (admin) {
      const payload = { role: "admin", data: admin };

      localStorage.setItem("loggedIn", JSON.stringify(payload));
      setUser(payload.role);
      setLoggedInData(payload.data);
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      {!user && <Login handleLogIn={handleLogIn} />}

      {user === "employee" && <EmployeeDashboard data={loggedInData} />}
      {user === "admin" && <AdminDashboard data={loggedInData} />}
    </>
  );
};

export default App;
