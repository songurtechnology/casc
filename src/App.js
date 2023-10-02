import React from 'react';
import './App.css'; // Import the CSS file
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Article from './components/Article'; // Add this import
import Sidebar from './components/Sidebar'; // Add this import

function App() {
  return (
    <div>
      <Header /> {/* Child component */}
      <MainContent>
        <Article /> {/* Nested child component */}
        <Sidebar /> {/* Nested child component */}
      </MainContent>
      <Footer /> {/* Child component */}
    </div>
  );
}

export default App;
