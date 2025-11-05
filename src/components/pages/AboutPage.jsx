import React from 'react';
import './AboutPage.css';
import { Server, Cloud, Code2, Cpu } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h2 className="page-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-intro">
          <p className="intro-text">
            Hello! I'm <span className="highlight">Monu Siddiki</span>, a passionate Full Stack Developer 
            specializing in <span className="highlight">DevOps</span> practices and cloud-based solutions. 
            Currently pursuing my BSc.CSIT at Texas International College in Kathmandu.
          </p>
        </div>

        <div className="about-focus">
          <h3 className="section-subtitle">DevOps Expertise</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">
                <Server size={32} />
              </div>
              <h4>Container Orchestration</h4>
              <p>Expert in Docker and Kubernetes for scalable application deployment and management.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">
                <Cloud size={32} />
              </div>
              <h4>CI/CD Pipelines</h4>
              <p>Proficient in Jenkins and ArgoCD for automated continuous integration and deployment.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">
                <Code2 size={32} />
              </div>
              <h4>Cloud Solutions</h4>
              <p>Experience with AWS services and cloud-native architecture patterns.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">
                <Cpu size={32} />
              </div>
              <h4>Full Stack Development</h4>
              <p>Building responsive applications with React, Spring Boot, and Java.</p>
            </div>
          </div>
        </div>

        <div className="about-journey">
          <h3 className="section-subtitle">My Journey</h3>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">Software Development Intern</h4>
                <p className="timeline-company">mSoft, Kathmandu</p>
                <p className="timeline-date">Dec 2024 - Feb 2025</p>
                <p className="timeline-desc">
                  Worked as a SaaS Software Developer, developing web applications using React, 
                  Spring Boot, and Java, with a focus on cloud-based solutions and DevOps practices.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">BSc.CSIT Student</h4>
                <p className="timeline-company">Texas International College</p>
                <p className="timeline-date">Apr 2022 - Present</p>
                <p className="timeline-desc">
                  Pursuing Computer Science degree with focus on software engineering, 
                  DevOps methodologies, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-philosophy">
          <p className="philosophy-text">
            I believe in continuous learning and delivering efficient, real-world solutions. 
            My passion lies in building scalable applications that leverage modern DevOps practices 
            to ensure reliability, performance, and seamless deployment workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;