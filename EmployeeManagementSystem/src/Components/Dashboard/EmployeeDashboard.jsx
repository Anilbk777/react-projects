import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <div className="h-screen p-10 bg-[#1c1c1c] ">
        <Header data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
}

export default EmployeeDashboard
