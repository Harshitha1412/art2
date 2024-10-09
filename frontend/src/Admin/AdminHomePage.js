import React from 'react';

const AdminHomePage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard where you can manage users, artworks, and permissions.</p>
      <ul>
        <li><a href="/manage-users">Manage Users</a></li>
        <li><a href="/manage-artworks">Manage Artworks</a></li>
        <li><a href="/site-settings">Site Settings</a></li>
      </ul>
    </div>
  );
};

export default AdminHomePage;
