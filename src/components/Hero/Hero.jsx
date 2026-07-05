import React from 'react';
import './Hero.css';
import profileLogo from '../../assets/Krishna logo.jpg';
import resumePdf from '../../assets/Krishna Patil resume.pdf';
import { usePortfolioVoice } from '../../Hooks/usePortfolioVoice';

const Hero = () => {
  const { speak, stop, isSpeaking, voiceType, toggleVoiceType } = usePortfolioVoice();
  const cvLink = "https://www.linkedin.com/posts/krishna-patil-rajput-b66b03340_hi-linkedin-im-krishna-patil-rajput-a-activity-7354165496759435267-BV-V?utm_source=share&utm_medium=member_android&rcm=ACoAAFWX3r4BoZNXBTYw6j3bpV0Im06Tru2b56A";

  const introText = `
    Welcome to the Deep Dive. I am Krishna. I build high-performance systems using React and Node.js.
    My portfolio features over 15 projects, including Samadhan Shoe Mart and Prix Robotics.
    My goal is to push the boundaries of web interaction.
  `;

  const handleVoiceToggle = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(introText);
    }
  };

  const speakAction = (sentence) => {
    speak(sentence);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <div className="photo-circle-wrapper">
              <div
                className={`photo-circle ${isSpeaking ? 'speaking-active' : ''}`}
                onClick={() => speak("I am Krishna Patil Rajput, a 2nd-year IT student at Matoshri College. I am a specialist in MERN stacks and an enthusiast in AI and Robotics from Nashik.")}
                onMouseEnter={() => !isSpeaking && speak("I am Krishna Patil Rajput. Click to hear my introduction.")}
              >
                <img src={profileLogo} alt="Krishna Patil Rajput" />
                {isSpeaking && (
                  <div className="ai-visualizer">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                )}
              </div>

              <div className="voice-controls">
                <div className="voice-type-toggle" onClick={toggleVoiceType}>
                  <span className="voice-label">{voiceType === 'male' ? '👨 Male' : '👩 Female'}</span>
                </div>
                <button
                  className={`ai-narrator-btn ${isSpeaking ? 'active' : ''}`}
                  onClick={handleVoiceToggle}
                  onMouseEnter={() => !isSpeaking && speak("Welcome to the Deep Dive. I am Krishna. Launch the narrator to hear my portfolio story.")}
                >
                  <span className="ai-icon">{isSpeaking ? '⏹️' : '🎙️'}</span>
                  <span className="ai-text">{isSpeaking ? 'Stop Narrator' : 'AI Deep Dive'}</span>
                </button>
                {isSpeaking && <p className="speaking-hint">AI is narrating my story...</p>}
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="quick-links-container">
              <div className="hero-badge" onMouseEnter={() => speak("2026 Developer Showcase")}>✨ 2026 Developer Showcase</div>
              <div className="hero-mini-socials">
                <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
                <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer" title="LinkedIn">💼</a>
                <a href="https://learn.microsoft.com/en-us/users/krishnapatilrajput-1391/" target="_blank" rel="noopener noreferrer" title="Microsoft">Ⓜ️</a>
                <a href="https://www.kaggle.com/krishnapatilrajput" target="_blank" rel="noopener noreferrer" title="Kaggle">📊</a>
                <a href="https://www.credly.com/users/krishna-patil-rajput/" target="_blank" rel="noopener noreferrer" title="Credly">🏅</a>
                <a href="https://hack2skill.com/dashboard/user_public_profile/?userId=6985d138d9155d4c3659a9e1" target="_blank" rel="noopener noreferrer" title="Hack2Skills">🏆</a>
              </div>
            </div>
            <h1
              className="hero-title"
              onClick={() => speak("I am Krishna Patil Rajput, a 2nd-year IT student at Matoshri College. I am a specialist in MERN stacks and an enthusiast in AI and Robotics from Nashik.")}
              onMouseEnter={() => speak("Krishna Patil Rajput")}
            >
              Hi, I'm <span className="highlight-rgb">Krishna Patil Rajput</span> 👨‍💻
            </h1>
            <p className="hero-description" onMouseEnter={() => speak("I'm a passionate 2nd Year IT Student at Matoshri College of Engineering. I'm a Full-Stack, Android, and Game Developer.")}>
              I'm a passionate 2nd Year IT Student at <strong>Matoshri College of Engineering</strong>.
              I'm a <strong>Full-Stack, Android, and Game Developer</strong>.
            </p>
            <p className="hero-description" onMouseEnter={() => speak("Nashik, India. Exploring AI, Robotics, and the future of web interactive experiences.")}>
              📍 <strong>Nashik, India</strong>. Exploring AI, Robotics, and the future of web interactive experiences.
            </p>

            <div className="hero-links-row">
              <a href="https://github.com/krishna67890" target="_blank" rel="noopener noreferrer">GitHub</a> •
              <a href={resumePdf} download="Krishna_Patil_Resume.pdf">Download CV</a> •
              <a href="https://learn.microsoft.com/en-us/users/krishnapatilrajput-1391/" target="_blank" rel="noopener noreferrer">Microsoft</a> •
              <a href="https://www.kaggle.com/krishnapatilrajput" target="_blank" rel="noopener noreferrer">Kaggle</a> •
              <a href="https://www.credly.com/users/krishna-patil-rajput/" target="_blank" rel="noopener noreferrer">Credly</a> •
              <a href="https://hack2skill.com/dashboard/user_public_profile/?userId=6985d138d9155d4c3659a9e1" target="_blank" rel="noopener noreferrer">🏆 Hack2Skills</a>
            </div>

            <div className="hero-buttons">
              <a
                href="#projects"
                className="btn btn-primary"
                onMouseEnter={() => speakAction("Accessing my full gallery of advanced web applications and technical solutions.")}
              >
                View Projects
              </a>
              <a
                href="https://github.com/krishna67890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                onMouseEnter={() => speakAction("Opening my open-source repositories where you can review my clean code and architecture.")}
              >
                GitHub
              </a>
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-download-cv"
                onMouseEnter={() => speakAction("Opening my professional online resume for your review.")}
              >
                View Resume
              </a>
              <a
                href={resumePdf}
                download="Krishna_Patil_Resume.pdf"
                className="btn btn-resume"
                onMouseEnter={() => speakAction("Downloading my professional curriculum vitae, optimized for technical recruiters.")}
              >
                Download CV 📄
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;