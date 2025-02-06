// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useEmployeeContext } from '../EmployeeContext';
import EmployeeDetails from './EmployeeDetails';
import EmployeeMap from './EmployeeMap';

const EmployeeList = () => {
  const { employees, setEmployees } = useEmployeeContext();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (employees.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setEmployees(response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the employee data!', error);
        });
    }
  }, [employees, setEmployees]);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ padding: '20px' }}>
        <input
          type="text"
          placeholder="Search by employee name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', width: '100%', maxWidth: '400px', marginBottom: '20px' }}
        />
      </div>
      {selectedEmployee ? (
        <EmployeeDetails employee={selectedEmployee} />
      ) : (
        <div>
          <h2>Employee List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button onClick={() => setSelectedEmployee(employee)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <EmployeeMap employees={filteredEmployees} />
    </div>
  );
};

export default EmployeeList;
