import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xvzqojvj');

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="mb-6">Contact Information</h3>
            <div className="contact-item">
              <Mail className="accent-text" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-secondary text-sm">oufquir9@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="accent-text" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-secondary text-sm">New York City, NY</p>
              </div>
            </div>

            <div className="social-links mt-8">
              <a href="https://github.com/MohamedAit-oufquir" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/mohamed-oufquir" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <form className="contact-form glass p-8" onSubmit={handleSubmit}>
            {state.succeeded ? (
              <div className="status-msg success">
                <p>Message sent successfully! I'll get back to you soon.</p>
                <button 
                  type="button" 
                  className="btn btn-primary mt-4" 
                  onClick={() => window.location.reload()}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your Name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What is this about?"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" className="btn btn-primary w-full" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                    </>
                  )}
                </button>
                {state.errors && (
                  <p className="status-msg error mt-4">Failed to send message. Please try again.</p>
                )}
              </>
            )}
          </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.5fr;
          }
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: center;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-link {
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .social-link:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: inherit;
          transition: var(--transition);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.1);
        }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-8 { margin-top: 2rem; }
        .status-msg {
          text-align: center;
          font-weight: 500;
          padding: 1.5rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
        }
        .status-msg.success { color: #10b981; }
        .status-msg.error { color: #ef4444; }
      `}} />
    </section>
  );
};

export default Contact;
