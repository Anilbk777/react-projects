import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
          <div className='h-screen p-10 bg-[#1c1c1c] '>
              <Header />
              <TaskListNumbers />
              <TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
