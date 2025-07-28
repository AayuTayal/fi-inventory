import React, { useEffect, useState } from 'react';

const AdminUsers = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:8080/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch users');
        }

        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div className="admin-users">
      <h2>All Registered Users</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>{user.username}</strong> — {user.isAdmin ? 'Admin' : 'User'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminUsers;
