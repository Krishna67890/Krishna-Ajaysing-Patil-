import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SpotifyPlayer from './components/SpotifyPlayer/SpotifyPlayer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <div className="App" onContextMenu={(e) => e.preventDefault()}>
      {loading ? (
        <LoadingScreen onFinished={handleLoadingFinished} />
      ) : (
        <>
          <Header onOpenSpotify={() => setIsSpotifyOpen(true)} />
          <main>
            <Hero />
            <Projects searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <SpotifyPlayer isOpen={isSpotifyOpen} onClose={() => setIsSpotifyOpen(false)} />
        </>
      )}
    </div>
  );
}

export default App;
