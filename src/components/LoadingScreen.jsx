import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

// Cinematic Backgrounds (Random Mountains & Cities from Unsplash)
const bg1 = "/bg1.png";
const bgCity1 = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070";
const bgMountain1 = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070";
const bgCity2 = "https://images.unsplash.com/photo-1449156006053-d7c64c1adb13?q=80&w=2070";
const bgMountain2 = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2070";
const bgCity3 = "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070";
const bgMountain3 = "https://images.unsplash.com/photo-1465919292275-c60ad2c1345c?q=80&w=2070";
const bgCity4 = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070";
const bgMountain4 = "https://images.unsplash.com/photo-1491555103946-3c631c32a97b?q=80&w=2070";
const bgCity5 = "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2070";
const bgMountain5 = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070";
const bgFinal = "https://images.unsplash.com/photo-1533134486753-c81769d76071?q=80&w=2070";

const loadingHints = [
  "INITIALIZING CAREER ASSETS...",
  "LOADING KRISHNA'S BIOMETRIC DATA...",
  "OPTIMIZING NEURAL NETWORKS...",
  "COMPILING FULL STACK MODULES...",
  "RENDERING DIGITAL ENVIRONMENT...",
  "ESTABLISHING SECURE CONNECTION...",
  "PREPARING PORTFOLIO OBJECTIVES...",
  "PORTFOLIO READY: KRISHNA AJAYSING RAJPUT"
];

const getKrishnaImage = (id) => {
  if (id === 17) return `/Krishna ${id}.png`;
  if (id === 18) return `/Krishna ${id}.heif`;
  return `/Krishna ${id}.jpg`;
};

const screens = [
  {
    id: 'intro',
    type: 'initial',
    duration: 6000,
    background: bg1,
  },
  {
    id: 'k1',
    name: 'AI DEVELOPER',
    role: 'NEURAL ARCHITECT',
    description: 'Pioneering the intersection of intelligence and development. Master of Agentic AI and LLMs.',
    skills: ['ARTIFICIAL INTELLIGENCE', 'GENERATIVE AI', 'PROMPT ENGINEERING', 'OPENAI API', 'LANGCHAIN'],
    image: getKrishnaImage(1),
    background: bgCity1,
    crop: 'crop-face',
    duration: 4000,
  },
  {
    id: 'k2',
    name: 'FULL STACK DEVELOPER',
    role: 'SYSTEM ARCHITECT',
    description: 'Building high-performance applications with modern tech stacks.',
    skills: ['REACT', 'NEXT.JS', 'NODE.JS', 'MONGODB', 'FIREBASE'],
    image: getKrishnaImage(2),
    background: bgMountain1,
    crop: 'crop-shoulders',
    duration: 4000,
  },
  {
    id: 'k3',
    name: 'FRONTEND DEVELOPER',
    role: 'UI/UX DESIGNER',
    description: 'Crafting immersive digital experiences with minimalist glass aesthetics.',
    skills: ['TAILWIND CSS', 'FRAMER MOTION', 'JAVASCRIPT', 'TYPESCRIPT'],
    image: getKrishnaImage(3),
    background: bgCity2,
    crop: 'crop-half-body',
    duration: 4000,
  },
  {
    id: 'k4',
    name: 'ANDROID DEVELOPER',
    role: 'MOBILE FRONTIER',
    description: 'Developing robust mobile applications for the Android ecosystem.',
    skills: ['JAVA', 'KOTLIN', 'REACT NATIVE', 'JETPACK COMPOSE'],
    image: getKrishnaImage(4),
    background: bgMountain2,
    crop: 'crop-over-shoulder',
    duration: 4000,
  },
  {
    id: 'k5',
    name: 'GAME DEVELOPER',
    role: 'VIRTUAL REALITY',
    description: 'Creating interactive 3D worlds and physics-driven gameplay.',
    skills: ['THREE.JS', 'BABYLON.JS', 'CANVAS API', 'WEBGL'],
    image: getKrishnaImage(5),
    background: bgCity3,
    crop: 'crop-side-profile',
    duration: 4000,
  },
  {
    id: 'k6',
    name: 'SOFTWARE ENGINEER',
    role: 'LOGIC ARCHITECT',
    description: 'Building next-generation software solutions and intelligent systems.',
    skills: ['PYTHON', 'C++', 'DATA STRUCTURES', 'ALGORITHMS'],
    image: getKrishnaImage(6),
    background: bgMountain3,
    crop: 'crop-coding',
    duration: 4000,
  },
  {
    id: 'k7',
    name: 'HACKATHON BUILDER',
    role: 'RAPID INNOVATOR',
    description: 'Turning innovative ideas into reality under extreme pressure. Portfolio Accomplished.',
    skills: ['CIVICMIND AI', 'SMART COMMUNITY', 'HEALTHCARE AI'],
    image: getKrishnaImage(7),
    background: bgCity4,
    crop: 'crop-hero',
    duration: 4000,
  },
  {
    id: 'k8',
    name: 'KPR INNOVATIONS',
    role: 'LEAD DEVELOPER',
    description: 'Leading the future of digital architecture and intelligent systems.',
    skills: ['SYSTEM DESIGN', 'SCALABILITY', 'AI INTEGRATION'],
    image: getKrishnaImage(8),
    background: bgMountain4,
    crop: 'crop-face',
    duration: 4000,
  },
  {
    id: 'k9',
    name: 'FINISHING TOUCHES',
    role: 'SYSTEM FINALIZATION',
    description: 'Optimizing final modules for the ultimate portfolio experience.',
    skills: ['PERFORMANCE', 'SECURITY', 'DEPLOYMENT'],
    image: getKrishnaImage(9),
    background: bgCity5,
    crop: 'crop-shoulders',
    duration: 4000,
  },
  {
    id: 'k10',
    name: 'PORTFOLIO READY',
    role: 'ARCHITECT SUPREME',
    description: 'The digital environment is fully synchronized. Initializing final redirection sequence.',
    skills: ['OPTIMIZATION', 'STABILITY', 'FINAL CHECK'],
    image: getKrishnaImage(10),
    background: bgMountain5,
    crop: 'crop-hero',
    duration: 4000,
  },
  {
    id: 'k11',
    name: 'SYSTEM READY',
    role: 'SYNCHRONIZATION COMPLETE',
    description: 'All neural pathways are established. Welcome to the future of development.',
    skills: ['FINALIZING', 'REDIRECTING', 'COMPLETE'],
    image: getKrishnaImage(11),
    background: bgFinal,
    crop: 'crop-hero',
    duration: 4000,
  },
  {
    id: 'k13',
    name: 'WEB SPECIALIST',
    role: 'ECOSYSTEM EXPERT',
    description: 'Mastering the modern web ecosystem.',
    skills: ['VUE', 'SVELTE', 'ANGULAR', 'WEB COMPONENTS'],
    image: getKrishnaImage(13),
    background: bgMountain1,
    crop: 'crop-shoulders',
    duration: 4000,
  },
  {
    id: 'k18',
    name: 'CLOUD ENGINEER',
    role: 'INFRASTRUCTURE LEAD',
    description: 'Orchestrating robust cloud deployments.',
    skills: ['TERRAFORM', 'GCP', 'AZURE', 'SERVERLESS'],
    image: getKrishnaImage(18),
    background: bgCity4,
    crop: 'crop-hero',
    duration: 4000,
  },
  {
    id: 'k20',
    name: 'BACKEND DEV',
    role: 'API ARCHITECT',
    description: 'Powering the web with robust server-side logic.',
    skills: ['GO', 'RUST', 'POSTGRESQL', 'REDIS'],
    image: getKrishnaImage(20),
    background: bgCity5,
    crop: 'crop-shoulders',
    duration: 4000,
  },
  {
    id: 'k21',
    name: 'DEV OPS',
    role: 'AUTOMATION EXPERT',
    description: 'Streamlining the development lifecycle.',
    skills: ['JENKINS', 'GITHUB ACTIONS', 'PROMETHEUS'],
    image: getKrishnaImage(21),
    background: bgMountain5,
    crop: 'crop-hero',
    duration: 4000,
  },
  {
    id: 'k22',
    name: 'FINAL SYNC',
    role: 'SYSTEM READY',
    description: 'Initialization sequence complete. Welcome to the portfolio.',
    skills: ['STABILITY', 'PERFORMANCE', 'READY'],
    image: getKrishnaImage(22),
    background: bgFinal,
    crop: 'crop-hero',
    duration: 4000,
  }
];

const LoadingScreen = ({ onFinished }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentHint, setCurrentHint] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  const isAudioUnlockedRef = useRef(false);
  const elapsedRef = useRef(0);
  const animationFrameRef = useRef();
  const hasSpokenRef = useRef({});
  const currentScreenRef = useRef(0);

  const speak = (text) => {
    if (isMuted || !window.speechSynthesis) return;

    const utter = () => {
      // Clear queue and resume if paused (bug in some browsers)
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const voices = window.speechSynthesis.getVoices();
      const utterance = new SpeechSynthesisUtterance(text);

      const preferredVoices = [
        'Google UK English Male',
        'Microsoft James Online (Natural)',
        'Microsoft Guy Online (Natural)',
        'Microsoft David',
        'English United Kingdom',
        'Male'
      ];

      let narratorVoice = null;
      for (const pattern of preferredVoices) {
        narratorVoice = voices.find(v => v.name.includes(pattern));
        if (narratorVoice) break;
      }

      if (!narratorVoice) {
        narratorVoice = voices.find(v => v.lang.startsWith('en-GB')) ||
                        voices.find(v => v.lang.startsWith('en-US')) ||
                        voices[0];
      }

      if (narratorVoice) {
        utterance.voice = narratorVoice;
        utterance.lang = narratorVoice.lang;
      }

      utterance.rate = 0.85;
      utterance.pitch = 0.95;
      utterance.volume = 1;

      // Ensure the utterance is actually spoken
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        utter();
      };
    } else {
      utter();
    }
  };

  const unlockSpeech = () => {
    if (isAudioUnlockedRef.current) return;

    // Interaction required for speech
    window.speechSynthesis.cancel();
    const silent = new SpeechSynthesisUtterance(" ");
    silent.volume = 0;
    window.speechSynthesis.speak(silent);

    setIsAudioUnlocked(true);
    isAudioUnlockedRef.current = true;

    const currentIdx = currentScreenRef.current;
    const screen = screens[currentIdx];

    // Immediate trigger for intro after unlock
    if (screen.id === 'intro' && !hasSpokenRef.current['intro']) {
      speak("Krishna Ajaysing Rajput Presents");
      hasSpokenRef.current['intro'] = true;
    }
  };

  useEffect(() => {
    // Preload all assets
    const allBackgrounds = screens.map(s => s.background).filter(Boolean);
    const allCharacters = screens.filter(s => s.image).map(s => s.image);

    [...allBackgrounds, ...allCharacters, bgFinal].forEach(url => {
      const img = new Image();
      img.src = url;
    });

    ['mousedown', 'keydown', 'touchstart', 'click'].forEach(evt =>
      window.addEventListener(evt, unlockSpeech, { once: true })
    );

    return () => {
      ['mousedown', 'keydown', 'touchstart', 'click'].forEach(evt =>
        window.removeEventListener(evt, unlockSpeech)
      );
    };
  }, []);

  useEffect(() => {
    const hintInterval = setInterval(() => {
      setCurrentHint(prev => (prev + 1) % loadingHints.length);
    }, 5000);
    return () => clearInterval(hintInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const totalCharDuration = screens.slice(1).reduce((acc, s) => acc + s.duration, 0);
    const introDuration = screens[0].duration;
    const totalDuration = introDuration + totalCharDuration;

    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      elapsedRef.current += deltaTime;

      let currentProgress = 0;
      if (elapsedRef.current > introDuration) {
        currentProgress = Math.min(100, ((elapsedRef.current - introDuration) / totalCharDuration) * 100);
      }
      setProgress(currentProgress);

      if (elapsedRef.current >= totalDuration) {
        window.location.href = "https://krishna-patil-rajput.vercel.app/";
        return;
      }

      let cumulative = 0;
      for (let i = 0; i < screens.length; i++) {
        cumulative += screens[i].duration;

        if (elapsedRef.current <= cumulative) {
          if (currentScreenRef.current !== i) {
            setCurrentScreen(i);
            currentScreenRef.current = i;
            const screen = screens[i];

            if (isAudioUnlockedRef.current) {
              if (screen.id === 'intro') {
                if (!hasSpokenRef.current['intro']) {
                  speak("Krishna Ajaysing Rajput Presents");
                  hasSpokenRef.current['intro'] = true;
                }
              } else if (screen.name) {
                if (!hasSpokenRef.current[screen.id]) {
                  speak(screen.name);
                  hasSpokenRef.current[screen.id] = true;
                }
              }
            }
          } else if (i === 0 && isAudioUnlockedRef.current && !hasSpokenRef.current['intro']) {
            // Safety fallback for the very first screen if unlock happened late
            speak("Krishna Ajaysing Rajput Presents");
            hasSpokenRef.current['intro'] = true;
          }
          break;
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isMuted]); // Removed currentScreen from dependency to avoid loop resets

  const KPRLogo = ({ size = 'large' }) => (
    <div className={`kpr-logo-circle ${size}`}>
      <img src="/KPR.png" alt="KPR" className="kpr-logo-img" />
    </div>
  );

  const SocialButtons = () => {
    return (
      <div className="social-button-grid">
        <a href="https://github.com/Krishna67890" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ pointerEvents: 'auto' }} onMouseEnter={() => speak("Opening GitHub Profile")}>
          <i className="fab fa-github"></i> GITHUB
        </a>
        <a href="https://www.linkedin.com/in/krishna-patil-rajput-b66b03340" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ pointerEvents: 'auto' }} onMouseEnter={() => speak("Opening LinkedIn Profile")}>
          <i className="fab fa-linkedin"></i> LINKEDIN
        </a>
        <a href="https://peerlist.io/krishrootlabs" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ pointerEvents: 'auto' }} onMouseEnter={() => speak("Viewing Peerlist Profile")}>
          <i className="fas fa-link"></i> PEERLIST
        </a>
        <a href="https://www.fiverr.com/sellers/krishnapatil_12/" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ pointerEvents: 'auto' }} onMouseEnter={() => speak("Hire me on Fiverr")}>
          <i className="fas fa-shopping-cart"></i> fiverr
        </a>
        <a href="https://upwork.com/freelancers/~012bd10f7b4ed7aeaf" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ pointerEvents: 'auto' }} onMouseEnter={() => speak("Hire me on Upwork")}>
          <i className="fas fa-briefcase"></i> UPWORK
        </a>
      </div>
    );
  };

  const screen = screens[currentScreen];

  return (
    <div className="gta-loading-screen" onContextMenu={(e) => e.preventDefault()} onClick={unlockSpeech}>
      <div className="smooth-blur-frame"></div>

      {screen.type === 'initial' ? (
        <div className="initial-scene">
          <div className="background-parallax intro-bg" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${bg1}")`,
            opacity: 1,
            transform: `scale(1.2) translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="intro-center">
            <div className="loading-ring-wrap">
              <div className="gta-spinner-large"></div>
              <KPRLogo size="large" />
              <div className="intro-name-tag">Krishna Ajaysing Rajput</div>
            </div>
            <div className="intro-text-block">
              <h1 className="main-title-rgb">Krishna Ajaysing Rajput</h1>
              <p className="presents-sub">Presents</p>
              <div className="intro-divider"></div>
              <p className="dev-edition">PORTFOLIO: DEVELOPER EDITION</p>
              <div className="loading-status-text">{loadingHints[currentHint]}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`cinematic-layout centered-char ${screen.crop}`}>
          <div className="background-parallax" style={{
            backgroundImage: `url("${screen.background}")`,
            transform: `scale(1.1) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`
          }}></div>

          <div className="character-layer-center" style={{
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
          }}>
            <img src={screen.image} alt="Krishna" className="character-img-center" draggable="false" />
            <div className="character-glow-overlay"></div>
          </div>

          <div className="atmospheric-fx">
            <div className="rain"></div>
            <div className="fog"></div>
          </div>

          {/* Left Panel - Identity */}
          <div className="panel left-panel">
             <div className="glass-text-block">
               <span className="label-portfolio" onMouseEnter={() => speak("Identity Profile")}>IDENTITY PROFILE</span>
               <h1 className="role-title-large" onMouseEnter={() => speak(screen.name)}>{screen.name}</h1>
               <div className="role-underline"></div>
               <p className="portfolio-description">{screen.description}</p>
             </div>
          </div>

          {/* Right Panel - Tech Stack & Socials */}
          <div className="panel right-panel">
            <div className="glass-text-block">
              <span className="label-portfolio" onMouseEnter={() => speak("Technical Tech Stack")}>TECHNICAL STACK</span>
              <div className="skills-grid">
                {screen.skills.map((skill, i) => (
                  <div key={i} className="skill-chip" onMouseEnter={() => speak(skill)}>{skill}</div>
                ))}
              </div>

              <div className="social-integration-section" style={{ pointerEvents: 'auto' }}>
                <span className="label-portfolio" onMouseEnter={() => speak("Connect or Hire")}>CONNECT / HIRE</span>
                <SocialButtons />
              </div>
            </div>
          </div>

          {/* HUD Elements */}
          <div className="gta-hint-system">
             <div className="hint-label">SYSTEM_STATUS</div>
             <div className="hint-content">{loadingHints[currentHint]}</div>
             <div className="gta-spinner-mini"></div>
          </div>

          {/* Down Circle Loading with KPR.png */}
          <div className="corner-logo-wrap">
             <div className="corner-hud-main">
               <div className="percentage-container">
                 <div className="percentage-display-gta-mini">
                   <span>{Math.floor(progress)}</span>
                 </div>
               </div>
               <div className="loading-ring-wrap-small">
                 <div className="gta-spinner-medium"></div>
                 <KPRLogo size="small" />
               </div>
             </div>
             <div className="corner-name-tag">Krishna Ajaysing Rajput</div>
          </div>
        </div>
      )}

      {/* Global Overlays (Pointer Events: None) */}
      <div className="noise-layer"></div>
      <div className="vignette-global"></div>

      {/* Global Progress Footer */}
      <div className="global-progress-footer">
        <div className="progress-bar-wrap">
          <div className="progress-label">Initializing Portfolio...</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
