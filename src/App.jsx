import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <div className="App" onContextMenu={(e) => e.preventDefault()}>
      {loading ? (
        <LoadingScreen onFinished={handleLoadingFinished} />
      ) : (
        <div className="black-screen" style={{ width: '100vw', height: '100vh', background: '#000' }}></div>
      )}
    </div>
  );
}

export default App;
