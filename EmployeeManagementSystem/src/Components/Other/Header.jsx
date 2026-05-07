import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedIn", "");
    // window.location.reload();
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{props.data.firstName}✌️</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg px-4 py-2 rounded-sm font-medium cursor"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
