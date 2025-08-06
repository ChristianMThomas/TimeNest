import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Orginization from './pages/orginization';
import EmployeeHome from './pages/employee/employeeHome';
import EmployeeChat from './pages/employee/employeeChat';
// import EmployeeProfile from './pages/employee/employeeProfile'; // Create this page if needed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/org" element={<Orginization />} />
        <Route path="/employee/home" element={<EmployeeHome />} />
        <Route path="/employee/chat" element={<EmployeeChat />} />
        {/* <Route path="/employee/profile" element={<EmployeeProfile />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;