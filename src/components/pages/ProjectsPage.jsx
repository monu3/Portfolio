import React from 'react';
import './ProjectsPage.css';
import { ExternalLink, Github, Package } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Doko',
      subtitle: 'SaaS eCommerce Platform',
      description: 'A comprehensive SaaS-based eCommerce platform designed to help new and small businesses create their own online stores. It aims to empower entrepreneurs by providing easy-to-use tools to launch, manage, and grow their digital presence.',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
      links: [
        { type: 'github', url: 'https://github.com/monu3/meroPasal', icon: <Github size={20} /> }
      ]
    },
    {
      title: 'CV Generator',
      subtitle: 'Professional Resume Builder',
      description: 'A web-based application built using Spring Boot, PostgreSQL, and Thymeleaf. It allows users to input personal and professional details to generate a professional CV instantly. The system stores user data securely in a PostgreSQL database and uses Thymeleaf templates to render clean, printable CV formats.',
      technologies: ['Spring Boot', 'PostgreSQL', 'Thymeleaf', 'Docker'],
      links: [
        { type: 'docker', url: 'https://hub.docker.com/repository/docker/monusiddiki/cv_generator/general', icon: <Package size={20} /> }
      ]
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h2 className="page-title">Projects</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-content">
        <p className="projects-intro">
          Here are some of my recent projects that showcase my expertise in full-stack 
          development and DevOps practices:
        </p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} on ${link.type}`}
                    >
                      {link.icon}
                      <ExternalLink size={14} className="external-icon" />
                    </a>
                  ))}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <p className="footer-text">
            Visit my <a href="https://github.com/monu3" target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub profile
            </a> to explore more projects and contributions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;