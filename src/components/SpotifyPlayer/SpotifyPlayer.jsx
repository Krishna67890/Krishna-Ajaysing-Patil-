import React, { useState, useEffect, useRef } from 'react';
import './SpotifyPlayer.css';

const SpotifyPlayer = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('spotify-player-pos');
    return saved ? JSON.parse(saved) : { x: window.innerWidth - 380, y: window.innerHeight - 550 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const playerRef = useRef(null);

  const playlistUrl = "https://open.spotify.com/embed/playlist/2TCiHgYtlR4QGikdLbWvXy?utm_source=generator&theme=0";

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleMouseDown = (e) => {
    if (isMaximized || e.target.closest('.player-controls')) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      let newX = e.clientX - dragOffset.x;
      let newY = e.clientY - dragOffset.y;

      // Boundaries
      newX = Math.max(0, Math.min(newX, window.innerWidth - (isMinimized ? 200 : 340)));
      newY = Math.max(0, Math.min(newY, window.innerHeight - (isMinimized ? 50 : 500)));

      const newPos = { x: newX, y: newY };
      setPosition(newPos);
      localStorage.setItem('spotify-player-pos', JSON.stringify(newPos));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, isMinimized]);

  if (!isVisible) return null;

  return (
    <div
      ref={playerRef}
      className={`spotify-floating-player ${isOpen ? 'open' : 'closing'} ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}
      style={{
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        zIndex: 10000
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="player-header">
        <div className="player-title">
          <div className="equalizer-icon">
            <span></span><span></span><span></span>
          </div>
          <span>Krishna's Coding Playlist</span>
        </div>
        <div className="player-controls">
          <button onClick={() => setIsMinimized(!isMinimized)} title="Minimize">
            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 13H5v-2h14v2z" fill="currentColor"/></svg>
          </button>
          <button onClick={() => setIsMaximized(!isMaximized)} title={isMaximized ? "Restore" : "Maximize"}>
            {isMaximized ? (
               <svg viewBox="0 0 24 24" width="14" height="14"><path d="M4 8H2V2h6v2H4v4zm18 8h-2v4h-4v2h6v-6zM2 16h2v4h4v2H2v-6zm18-8V4h-4V2h6v6h-2z" fill="currentColor"/></svg>
            ) : (
               <svg viewBox="0 0 24 24" width="14" height="14"><path d="M4 4h16v16H4V4zm2 4v10h12V8H6z" fill="currentColor"/></svg>
            )}
          </button>
          <button onClick={onClose} className="close-btn" title="Close">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>

      <div className="player-content">
        {!isMinimized && (
          <>
            <iframe
              src={playlistUrl}
              width="100%"
              height={isMaximized ? "100%" : "380"}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
            <div className="player-footer">
              Powered by Spotify
            </div>
          </>
        )}
      </div>
      <div className="resize-handle"></div>
    </div>
  );
};

export default SpotifyPlayer;
