import React from 'react';
import './CoverPage.css';
import { BookOpen } from 'lucide-react';

const CoverPage = () => {
  return (
    <div className="cover-page">
      <div className="cover-ornament cover-ornament-top"></div>
      
      <div className="cover-content">
        <div className="cover-icon">
          <BookOpen size={60} strokeWidth={1.5} />
        </div>
        
        <h1 className="cover-title">Portfolio</h1>
        
        <div className="cover-divider"></div>
        
        <h2 className="cover-name">Monu Siddiki</h2>
        
        <p className="cover-subtitle">
          DevOps Engineer<br />
          & Full Stack Developer
        </p>
        
        <div className="profile-image-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_d414b529-4cec-4c1e-bca4-cdf9cc8f1834/artifacts/dhzetlto_1699433249450.jpg" 
            alt="Monu Siddiki"
            className="profile-image"
          />
        </div>
        
        <p className="cover-tagline">
          Building scalable solutions with modern DevOps practices
        </p>
      </div>
      
      <div className="cover-ornament cover-ornament-bottom"></div>
      
      <div className="cover-footer">
        <p>Scroll or click to explore</p>
      </div>
    </div>
  );
};

export default CoverPage;