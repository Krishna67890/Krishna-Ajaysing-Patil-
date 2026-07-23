import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './GithubRepo.css';

const GithubRepo = () => {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Krishna67890/krishna67890/main/README.md')
      .then(res => res.text())
      .then(data => {
        setReadme(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching readme:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="github-repo-container">
      <div className="github-header">
        <div className="github-title-wrap">
          <i className="fab fa-github"></i>
          <span className="github-repo-name">Krishna67890 / README.md</span>
        </div>
        <div className="github-status">
          <span className="status-dot"></span>
          LIVE_REPOS_SYNCED
        </div>
      </div>

      <div className="readme-content-wrapper">
        {loading ? (
          <div className="readme-loading">
            <div className="gta-spinner-mini"></div>
            <span>FETCHING_DATA...</span>
          </div>
        ) : (
          <div className="readme-content">
            <ReactMarkdown>{readme}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubRepo;
