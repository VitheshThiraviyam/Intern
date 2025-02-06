// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import { EmployeeProvider } from './EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="App">
          <h1>Employee Management System</h1>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<EmployeeList />} />  {/* Use element prop */}
            <Route path="/employee/:id" element={<EmployeeDetails />} />  {/* Use element prop */}
          </Routes>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
