// Child Component: MainContent.js

import React from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

function MainContent() {
  return (
    <main>
      <Article /> {/* Nested child component */}
      <Sidebar /> {/* Nested child component */}
    </main>
  );
}

export default MainContent;
