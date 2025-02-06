import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the employee details!', error);
      });
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="employee-details">
      <h2>{employee.name}'s Details</h2>
      <p><strong>Username:</strong> {employee.username}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Website:</strong> {employee.website}</p>
    </div>
  );
};

export default EmployeeDetails;
