// OtherWorks.jsx
import React from 'react';
import './OtherWorks.css';
import fitclub from '../../../assets/image/fitclub.jfif'
import nike from '../../../assets/image/nike.jfif'

const OtherWorks = () => {
  return (
    <div className="other-works-container">
      <section className="other-works-section">
        <h2 className="other-works-heading">Other Works</h2>
        <p className="other-works-description">
          Beyond my featured projects, I have worked on a variety of other interesting projects and collaborations that showcase my versatility and creativity in web development and design.
        </p>
        <div className="other-works-grid">
          <div className="other-works-card">
            <img src={fitclub} alt="Work 1" className="other-works-image" />
            <h3 className="other-works-title">Work 1</h3>
            <p className="other-works-text">
              A brief description of Work 1, highlighting key aspects and technologies used.
            </p>
          </div>
          <div className="other-works-card">
            <img src={nike} alt="Work 2" className="other-works-image" />
            <h3 className="other-works-title">Work 2</h3>
            <p className="other-works-text">
              A brief description of Work 2, showcasing your skills and the impact of the project.
            </p>
          </div>
          <div className="other-works-card">
            <img src={fitclub} alt="Work 3" className="other-works-image" />
            <h3 className="other-works-title">Work 3</h3>
            <p className="other-works-text">
              A brief description of Work 3, emphasizing the unique challenges and solutions you provided.
            </p>
          </div>
          {/* <div className="other-works-card">
            <img src={nike} alt="Work 2" className="other-works-image" />
            <h3 className="other-works-title">Work 2</h3>
            <p className="other-works-text">
              A brief description of Work 2, showcasing your skills and the impact of the project.
            </p>
          </div> */}
          {/* Add more work cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default OtherWorks;
