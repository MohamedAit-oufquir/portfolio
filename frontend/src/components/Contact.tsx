import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

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
                <p className="text-secondary text-sm">mohamedoufquir.dev@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="accent-text" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-secondary text-sm">New York City, NY</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="accent-text" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-secondary text-sm">+1 (123) 456-7890</p>
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
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>
                  Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                </>
              )}
            </button>
            {status === 'success' && <p className="status-msg success mt-4">Message sent successfully!</p>}
            {status === 'error' && <p className="status-msg error mt-4">Failed to send message. Please try again.</p>}
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
          padding: 0.5rem;
          border-radius: 4px;
        }
        .status-msg.success { color: #10b981; }
        .status-msg.error { color: #ef4444; }
      `}} />
    </section>
  );
};

export default Contact;
