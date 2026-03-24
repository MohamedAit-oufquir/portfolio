const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image-container">
            <div className="profile-image-placeholder">
              <img
                src="/20201027_144442_resized.jpg"
                alt="Profile"
                className="profile-image"
              />
            </div>

            <div className="image-accent"></div>
          </div>
          <div className="about-text glass p-8">
            <p className="mb-4">
              Hello! I'm Mohamed, a dedicated{" "}
              <span className="accent-text">Software Engineer</span> with a
              strong background in{" "}
              <span className="accent-text">Quality Assurance </span> and{" "}
              <span className="accent-text">Data science</span>. I
              specialize in building reliable software systems that not only
              perform well but are also thoroughly tested and data-driven.
            </p>
            <p className="mb-4">
              My journey in tech has been driven by a curiosity for how things
              work under the hood and a commitment to delivering high-quality
              user experiences. Whether it's designing complex backend
              architectures or optimizing data pipelines, I bring a methodical
              and quality-first approach to every project.
            </p>
            <p>
              I thrive in collaborative environments and am always looking for
              new challenges that push my technical boundaries. Let's build
              something amazing together!
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.5fr;
          }
        }
        .about-image-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
        }
        .profile-image-placeholder {
          width: 100%;
          height: 100%;
          background: var(--secondary);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          position: relative;
          z-index: 2;
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image-accent {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent);
          border-radius: 20px;
          z-index: 1;
        }
        .about-text {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }
        .p-8 { padding: 2rem; }
        .mb-4 { margin-bottom: 1rem; }
      `,
        }}
      />
    </section>
  );
};

export default About;
