import { Code2, Monitor, ShieldCheck, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 size={32} />,
      skills: ['Java','Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', ],
    },
    {
      title: 'Web & Backend',
      icon: <Monitor size={32} />,
      skills: ['React', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Testing & QA',
      icon: <ShieldCheck size={32} />,
      skills: ['Selenium', 'Cypress', 'Pytest', 'JUnit', 'Manual Testing', 'Performance Testing'],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={32} />,
      skills: ['Docker', 'AWS', 'Git', 'Jenkins', 'GitHub Actions', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="section bg-secondary-alt">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass p-8">
              <div className="skill-icon accent-text">{category.icon}</div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-secondary-alt {
          background-color: #0d0d0d;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .skill-card {
          text-align: center;
          transition: var(--transition);
        }
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .skill-icon {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }
        .skill-category-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        .skill-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }
        .skill-item {
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }
        .skill-item:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(0, 212, 255, 0.1);
        }
      `}} />
    </section>
  );
};

export default Skills;
