import React from "react";
import RightCard from "./RightCard";

const RightContent = () => {
  
  const users = [
    {
      id:1,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"royalblue",
      tag: "Satisfied",
    },
    {
      id:2,
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"green",
      tag: "Underserved",
    },
    {
      id:3,
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:"orange",
      tag: "Underbanked",
    },
  {
      id:4,
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color:"pink",
      tag: "Undervalued",
    },
  ];
  return (
    <div id="right" className="h-full w-2/3 p-6 flex overflow-x-auto rounded-4xl gap-5">
      {/* <RightCard users= {users} /> */}
      {
        users.map((user) => {
          return <RightCard key={user.id} color={user.color} idx={user.id} img={ user.img} tag={user.tag} />
        })
     }
    </div>
  );
};

export default RightContent;
