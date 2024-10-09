import React from 'react';

const CuratorHomePage = () => {
  return (
    <div>
      <h1>Curator Dashboard</h1>
      <p>Welcome to the Curator Dashboard where you can organize exhibitions and highlight pieces.</p>
      <ul>
        <li><a href="/organize-exhibition">Organize Exhibitions</a></li>
        <li><a href="/select-artworks">Select Artworks to Highlight</a></li>
        <li><a href="/provide-insights">Provide Cultural Insights</a></li>
      </ul>
    </div>
  );
};

export default CuratorHomePage;
