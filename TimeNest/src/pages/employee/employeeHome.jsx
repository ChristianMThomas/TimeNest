import React from 'react'
import Navbar from '../../components/navbar';

const EmployeeHome = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center py-8 pt-20">
        <h1 className="text-4xl font-bold mb-6 text-indigo-900">Employee Dashboard</h1>
        <h2 className="text-2xl font-bold mb-6 text-black">Welcome back, Y/N </h2>

        <div className='w-5/6 flex flex-row justify-around '>
          <img src='/assets/clock-in-Icon.png' alt='Clock In' className='w-16 h-16' />
          <img src='/assets/report-Icon.png' alt='Report Issue' className='w-16 h-16' />
        </div>

        <div className='w-5/6 flex flex-row justify-around '>
          <h2 className='text-2xl'> Start Shift</h2>
          <h2 className='text-2xl'>Report Issue</h2>
        </div>

        <div className="employee-card card mb-6 w-full max-w-md">
          <div className="flex items-center mb-2">
            <img
              src='/assets/notification-bell.png'
              alt="Notification Bell"
              className="w-10 h-10 mr-2"
            />
            <ul>
              <li>No notifications yet.</li>
            </ul>
          </div>
        </div>
        <div className="employee-card card mb-6 w-full max-w-md">
          <div className="flex items-center mb-2">
            <img
              src='/assets/clock.png'
              alt="Notification Bell"
              className="w-10 h-10 mr-2"
            />
            <p>Hours worked: <span className="font-bold">00:00:00</span></p>
          </div>
        </div>
        <div className="employee-card mb-6 card w-full max-w-md">
          <div className="flex items-center mb-2">
            <img
              src='/assets/location-pin.png'
              alt="Notification Bell"
              className="w-10 h-10 mr-2"
            />
            <p>Current location: <span className="font-bold">N/A</span></p>
          </div>
        </div>
      </div>

    </>
  );
};

export default EmployeeHome