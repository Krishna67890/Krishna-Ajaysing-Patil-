import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';
import './Header.css';
import resumePdf from '../../assets/Krishna Patil resume.pdf';

const Header = ({ onOpenJourney, onOpenGame, onOpenTerminal, onOpenSpotify }) => {
  const { speak } = usePortfolioVoice();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#hero', desc: "Go to the home section." },
    { name: 'Projects', href: '#projects', desc: "Explore my technical projects." },
    { name: 'Certificates', href: '#certificates', desc: "View my professional certifications." },
    { name: 'AI', href: '#ai-projects', desc: "Check out my AI projects." },
    { name: 'Skills', href: '#skills', desc: "View my technical arsenal." },
    { name: 'Contact', href: '#contact', desc: "Get in touch." }
  ];

  const menuItems = [
    ...navItems,
    { name: 'Games', href: '#games', desc: "Play my interactive games." },
    { name: 'My Journey', action: onOpenJourney, desc: "Read about my professional path." },
    { name: 'Terminal', action: onOpenTerminal, desc: "Launch the KPR developer terminal." },
    { name: 'Game Mode', action: onOpenGame, desc: "Enter the arcade experience." },
    { name: 'Spotify Player', action: onOpenSpotify, desc: "Listen to my curated coding playlist." }
  ];

  const handleProjectSelect = (e) => {
    const targetId = e.target.value;
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>Krishna Patil Rajput</span>
        </div>

        <div className="header-right">
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onMouseEnter={() => speak(item.desc)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumePdf}
                  download="Krishna_Patil_Resume.pdf"
                  className="resume-btn"
                  onMouseEnter={() => speak("Download my professional resume.")}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="project-selector-container">
            <select className="project-selector" onChange={handleProjectSelect} aria-label="Select Project">
              <option value="">Quick Jump</option>
              <option value="#projects">💻 Advanced Projects</option>
              <option value="#certificates">Certificates</option>
              <option value="#games">Games</option>
              <option value="#ai-projects">AI Projects</option>
              <option value="#skills">Skills</option>
              <option value="#contact">Contact</option>
            </select>
          </div>

          <div className="theme-toggle-container">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {isDark ? (
                <span className="theme-icon">🌙</span>
              ) : (
                <span className="theme-icon">☀️</span>
              )}
              <div className={`toggle-track ${isDark ? 'active' : ''}`}>
                <div className="toggle-thumb"></div>
              </div>
            </button>
          </div>

          <button
            className="spotify-nav-btn"
            onClick={onOpenSpotify}
            onMouseEnter={() => speak("🎵 Coding Playlist. Listen to the music I code with.")}
            aria-label="Open Spotify Playlist"
          >
            <div className="spotify-icon-wrapper">
              <svg className="spotify-logo-svg" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.31c-.218.358-.684.474-1.042.256-2.87-1.752-6.485-2.15-10.74-1.174-.41.094-.82-.164-.914-.574-.094-.41.164-.82.574-.914 4.656-1.066 8.654-.614 11.865 1.344.358.218.474.684.257 1.042zm1.467-3.264c-.274.444-.852.585-1.296.31-3.284-2.016-8.29-2.6-12.176-1.42-.502.153-1.033-.13-1.186-.632-.153-.502.13-1.033.632-1.186 4.44-1.348 10.038-.684 13.816 1.63.444.274.585.852.31 1.296zm.135-3.39c-3.937-2.338-10.435-2.553-14.23-1.398-.604.184-1.246-.162-1.43-.766-.184-.604.162-1.246.766-1.43 4.354-1.322 11.532-1.066 16.06 1.62.544.323.72 1.03.397 1.574-.323.544-1.03.72-1.574.397z"/>
              </svg>
              <div className="spotify-pulse"></div>
            </div>
            <span className="spotify-nav-text">Music</span>
            <div className="spotify-tooltip">
              <strong>🎵 Coding Playlist</strong>
              Listen to the music I code with.
            </div>
          </button>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <HamburgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        items={[...menuItems, { name: 'Resume', href: resumePdf, isDownload: true, desc: "Download my professional resume." }]}
      />
    </header>
  );
};

export default Header;