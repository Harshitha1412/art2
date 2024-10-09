import React from 'react';

const ArtistHomePage = () => {
  return (
    <div>
      <h1>Artist Dashboard</h1>
      <p>Welcome to the Artist Dashboard where you can upload and manage your artworks.</p>
      <ul>
        <li><a href="/upload-artwork">Upload Artwork</a></li>
        <li><a href="/manage-artwork">Manage Your Artworks</a></li>
        <li><a href="/view-sales">View Sales</a></li>
      </ul>
    </div>
  );
};

export default ArtistHomePage;
