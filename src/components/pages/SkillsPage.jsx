import React from 'react';
import './SkillsPage.css';
import { 
  Container, 
  GitBranch, 
  Cloud, 
  Boxes,
  Database,
  Layers,
  Workflow,
  FileCode
} from 'lucide-react';

const SkillsPage = () => {
  const devopsSkills = [
    { name: 'Docker', icon: <Container size={28} />, level: 90 },
    { name: 'Kubernetes', icon: <Boxes size={28} />, level: 85 },
    { name: 'Jenkins', icon: <GitBranch size={28} />, level: 80 },
    { name: 'ArgoCD', icon: <Workflow size={28} />, level: 80 },
    { name: 'AWS', icon: <Cloud size={28} />, level: 75 }
  ];

  const techStack = [
    {
      category: 'Frontend',
      icon: <FileCode size={28} />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      icon: <Layers size={28} />,
      skills: ['Spring Boot', 'Java', 'Hibernate', 'JDBC']
    },
    {
      category: 'Database',
      icon: <Database size={28} />,
      skills: ['PostgreSQL', 'MongoDB', 'SQL']
    }
  ];

  return (
    <div className="skills-page">
      <div className="page-header">
        <h2 className="page-title">Technical Skills</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="skills-content">
        <div className="devops-section">
          <h3 className="section-subtitle">
            <span className="subtitle-icon"><Cloud size={24} /></span>
            DevOps & Cloud
          </h3>
          <div className="skills-list">
            {devopsSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-stack-section">
          <h3 className="section-subtitle">
            <span className="subtitle-icon"><Layers size={24} /></span>
            Technology Stack
          </h3>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-header">
                  <span className="tech-icon">{tech.icon}</span>
                  <h4 className="tech-category">{tech.category}</h4>
                </div>
                <div className="tech-skills">
                  {tech.skills.map((skill, idx) => (
                    <span key={idx} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="expertise-summary">
          <h3 className="section-subtitle">Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-item">
              <div className="competency-bullet"></div>
              <p>Container orchestration and microservices architecture</p>
            </div>
            <div className="competency-item">
              <div className="competency-bullet"></div>
              <p>Automated CI/CD pipeline implementation</p>
            </div>
            <div className="competency-item">
              <div className="competency-bullet"></div>
              <p>Cloud infrastructure management and optimization</p>
            </div>
            <div className="competency-item">
              <div className="competency-bullet"></div>
              <p>Full-stack web application development</p>
            </div>
            <div className="competency-item">
              <div className="competency-bullet"></div>
              <p>Database design and optimization</p>
            </div>
            <div className="competency-item">
              <div className="competency-bullet"></div>
              <p>Code quality and maintainability best practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;