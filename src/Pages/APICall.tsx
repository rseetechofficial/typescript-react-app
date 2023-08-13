import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const APICall: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserData, setSelectedUserData] = useState<User | null>(null);

  useEffect(() => {
    // Fetch data from the API when the component loads
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleUserClick = (userId: number) => {
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUserData(selectedUser || null);
  };

  return (
    <div>
      <h1>API Call Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button onClick={() => handleUserClick(user.id)}>View Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUserData && (
        <div>
          <h3>Selected User Details</h3>
          <p>Name: {selectedUserData.name}</p>
          <p>Email: {selectedUserData.email}</p>
        </div>
      )}

    </div>
  );
};

export default APICall;
