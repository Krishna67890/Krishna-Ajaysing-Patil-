import React, { useState, useEffect, useRef } from 'react';
import './SpotifyPlayer.css';

const SpotifyPlayer = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [size, setSize] = useState(() => {
    const saved = localStorage.getItem('spotify-player-size');
    return saved ? JSON.parse(saved) : { width: 340, height: 500 };
  });

  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('spotify-player-pos');
    return saved ? JSON.parse(saved) : { x: window.innerWidth - 380, y: window.innerHeight - 550 };
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const playerRef = useRef(null);

  // Updated Playlist URL
  const playlistUrl = "https://open.spotify.com/embed/playlist/2TCiHgYtlR4QGikdLbWvXy?utm_source=generator&theme=0";

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsMinimized(false); // Open fully when clicked from header
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isMinimized) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isMinimized, onClose]);

  const handleMouseDown = (e) => {
    if (isMaximized || isMinimized || e.target.closest('.player-controls') || e.target.closest('.resize-handle')) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        let newX = e.clientX - dragOffset.x;
        let newY = e.clientY - dragOffset.y;
        newX = Math.max(0, Math.min(newX, window.innerWidth - size.width));
        newY = Math.max(0, Math.min(newY, window.innerHeight - size.height));
        const newPos = { x: newX, y: newY };
        setPosition(newPos);
        localStorage.setItem('spotify-player-pos', JSON.stringify(newPos));
      }
      if (isResizing) {
        let newWidth = e.clientX - position.x;
        let newHeight = e.clientY - position.y;
        newWidth = Math.max(300, Math.min(newWidth, 600));
        newHeight = Math.max(400, Math.min(newHeight, 800));
        const newSize = { width: newWidth, height: newHeight };
        setSize(newSize);
        localStorage.setItem('spotify-player-size', JSON.stringify(newSize));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, position, size]);

  if (!isVisible) return null;

  return (
    <div
      ref={playerRef}
      className={`spotify-floating-player ${isOpen ? 'open' : 'closing'} ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}
      style={{
        left: isMaximized ? 0 : (isMinimized ? 'auto' : position.x),
        top: isMaximized ? 0 : (isMinimized ? 'auto' : position.y),
        right: isMinimized ? '30px' : 'auto',
        bottom: isMinimized ? '30px' : 'auto',
        width: isMaximized ? '100vw' : isMinimized ? '64px' : `${size.width}px`,
        height: isMaximized ? '100vh' : isMinimized ? '64px' : `${size.height}px`,
        zIndex: 10000
      }}
      onMouseDown={handleMouseDown}
    >
      {isMinimized ? (
        <div className="minimized-trigger" onClick={() => setIsMinimized(false)} title="Restore Player">
          <div className="spotify-glow-ring"></div>
          <svg className="spotify-icon-min" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.31c-.218.358-.684.474-1.042.256-2.87-1.752-6.485-2.15-10.74-1.174-.41.094-.82-.164-.914-.574-.094-.41.164-.82.574-.914 4.656-1.066 8.654-.614 11.865 1.344.358.218.474.684.257 1.042zm1.467-3.264c-.274.444-.852.585-1.296.31-3.284-2.016-8.29-2.6-12.176-1.42-.502.153-1.033-.13-1.186-.632-.153-.502.13-1.033.632-1.186 4.44-1.348 10.038-.684 13.816 1.63.444.274.585.852.31 1.296zm.135-3.39c-3.937-2.338-10.435-2.553-14.23-1.398-.604.184-1.246-.162-1.43-.766-.184-.604.162-1.246.766-1.43 4.354-1.322 11.532-1.066 16.06 1.62.544.323.72 1.03.397 1.574-.323.544-1.03.72-1.574.397z" fill="#1DB954"/>
          </svg>
          <div className="minimized-close" onClick={(e) => { e.stopPropagation(); onClose(); }} title="Close Player">✕</div>
        </div>
      ) : (
        <>
          <div className="player-header">
            <div className="player-title">
              <div className="equalizer-icon">
                <span></span><span></span><span></span>
              </div>
              <span>Krishna's Playlist</span>
            </div>
            <div className="player-controls">
              <button onClick={() => setIsMinimized(true)} title="Minimize to Corner">
                <svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 13H5v-2h14v2z" fill="currentColor"/></svg>
              </button>
              <button onClick={() => setIsMaximized(!isMaximized)} title={isMaximized ? "Restore" : "Maximize"}>
                {isMaximized ? (
                   <svg viewBox="0 0 24 24" width="14" height="14"><path d="M4 8H2V2h6v2H4v4zm18 8h-2v4h-4v2h6v-6zM2 16h2v4h4v2H2v-6zm18-8V4h-4V2h6v6h-2z" fill="currentColor"/></svg>
                ) : (
                   <svg viewBox="0 0 24 24" width="14" height="14"><path d="M4 4h16v16H4V4zm2 4v10h12V8H6z" fill="currentColor"/></svg>
                )}
              </button>
              <button onClick={onClose} className="close-btn" title="Close & Exit">
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/></svg>
              </button>
            </div>
          </div>

          <div className="player-content">
            <iframe
              src={playlistUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
              style={{ minHeight: isMaximized ? 'calc(100vh - 80px)' : `${size.height - 80}px` }}
            ></iframe>
            <div className="player-footer">
              Powered by Spotify
            </div>
          </div>
          {!isMaximized && (
            <div className="resize-handle" onMouseDown={handleResizeMouseDown}></div>
          )}
        </>
      )}
    </div>
  );
};

export default SpotifyPlayer;
