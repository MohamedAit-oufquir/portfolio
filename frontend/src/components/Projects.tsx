import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AutoTest Framework "XYZ Bank Systems"',
      tech: 'Java, Selenium, Pytest',
      description: 'This project simulates a banking system with deposit and withdrawal features',
      github: 'https://github.com/MohamedAit-oufquir/XYZ-Bank-Systems',
      demo: 'https://github.com/MohamedAit-oufquir/XYZ-Bank-Systems',
    },
    {
      title: 'DataInsights Dashboard',
      tech: 'React, Node.js, D3.js',
      description: 'Interactive visualization platform for real-time data analysis and reporting, used for performance monitoring.',
      github: '#',
      demo: '#',
    },
    {
      title: 'snake game',
      tech: 'HTML, CSS, JavaScript',
      description: 'Classic snake game implemented in HTML, CSS, and JavaScript.',
      github: 'https://github.com/MohamedAit-oufquir/SnakeGame2?tab=readme-ov-file',
      demo: 'https://iridescent-lollipop-be2b87.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass overflow-hidden">
              <div className="project-image-placeholder">
                <span className="accent-text">{project.title.charAt(0)}</span>
              </div>
              <div className="project-info p-6">
                <p className="project-tech accent-text">{project.tech}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} className="project-link" title="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="project-link" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: var(--transition);
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
        }
        .project-image-placeholder {
          height: 200px;
          background: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 800;
          border-bottom: 1px solid var(--glass-border);
        }
        .project-tech {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .project-description {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .project-links {
          display: flex;
          gap: 1.5rem;
        }
        .project-link {
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .project-link:hover {
          color: var(--accent);
        }
        .overflow-hidden { overflow: hidden; }
      `}} />
    </section>
  );
};

export default Projects;
