import React from 'react';
import './ContactPage.css';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from 'lucide-react';

const ContactPage = () => {
  const handleDownloadCV = () => {
    // Open CV in new tab for download
    window.open('https://customer-assets.emergentagent.com/job_d414b529-4cec-4c1e-bca4-cdf9cc8f1834/artifacts/0t37s2e3_Monu-Monu-cv%20%281%29.pdf', '_blank');
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h2 className="page-title">Get In Touch</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="contact-content">
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to reach out!
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={32} />
            </div>
            <h3 className="contact-label">Email</h3>
            <a href="mailto:m9800564411@gmail.com" className="contact-value">
              m9800564411@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={32} />
            </div>
            <h3 className="contact-label">Phone</h3>
            <a href="tel:+9779800564411" className="contact-value">
              +977 9800564411
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={32} />
            </div>
            <h3 className="contact-label">Location</h3>
            <p className="contact-value">Kapan, Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="social-section">
          <h3 className="section-subtitle">Connect With Me</h3>
          <div className="social-links">
            <a 
              href="https://github.com/monu3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={28} />
              <span>GitHub</span>
              <ExternalLink size={16} className="external-icon" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/monu-siddiki-6a92182a2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={28} />
              <span>LinkedIn</span>
              <ExternalLink size={16} className="external-icon" />
            </a>

            <button 
              onClick={handleDownloadCV}
              className="social-link cv-download-btn"
            >
              <Download size={28} />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        <div className="availability-badge">
          <div className="status-dot"></div>
          <p>Available for freelance projects and full-time opportunities</p>
        </div>

        <div className="contact-footer">
          <p className="footer-quote">
            "Let's build something amazing together!"
          </p>
          <div className="footer-signature">
            <div className="signature-line"></div>
            <p className="signature-name">Monu Siddiki</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;