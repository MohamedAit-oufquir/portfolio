import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text-container">
          <p className="hero-greeting accent-text">Hello, I'm</p>
          <h1 className="hero-name">Mohamed Ait‑Oufquir</h1>
          <h2 className="hero-title">Software Engineer / <span className="accent-text">Data & QA</span></h2>
          <p className="hero-description">
            Building robust, scalable applications and ensuring quality through automated excellence. 
            Passionate about data-driven decisions and clean architecture.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <ChevronDown size={32} />
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.05) 0%, rgba(10, 10, 10, 1) 100%);
        }
        .hero-content {
          text-align: left;
        }
        .hero-greeting {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .hero-name {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .hero-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .hero-description {
          max-width: 600px;
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }
        .hero-cta {
          display: flex;
          gap: 1.5rem;
        }
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          transition: var(--transition);
          display: inline-block;
        }
        .btn-primary {
          background: var(--accent);
          color: var(--primary);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px var(--accent-glow);
        }
        .btn-secondary {
          border: 1px solid var(--accent);
          color: var(--accent);
        }
        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-2px);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          color: var(--text-secondary);
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-10px) translateX(-50%);}
          60% {transform: translateY(-5px) translateX(-50%);}
        }
      `}} />
    </section>
  );
};

export default Hero;
