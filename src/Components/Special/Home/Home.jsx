// Home.jsx
import React from 'react';
import './Home.css';
// import intersectionOvserver from './intersectionOvserver'
import fitclub from '../../../assets/image/fitclub.jfif'
import nike from '../../../assets/image/nike.jfif'

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">

        <h1 className="hero-title animate__animated animate__bounceInDown"><span>Hi,</span><br/> I'm Arpan Rakshit</h1>
        <p className="hero-subtitle animate__animated animate__bounceInUp">Front-End Developer | UI/UX Designer</p>
        <a href="#projects" className="home-hero-cta-button animate__animated animate__bounceInRight">View My Work</a>
      </section>

      {/* About Section */}
      <section className="home-about-section animate__animated animate__bounceInRight">
        <h2 className='home-about-heading'>About Me</h2>
        <span className='home-about-paragraph'>
          I'm a passionate front-end developer with a knack for creating beautiful and user-friendly web experiences. 
          With a background in UI/UX design, I strive to build websites that are not only visually appealing but also highly functional.
        </span>
      </section>

      {/* Projects Section */}
      <section id="projects" className="home-projects-section">
        <h2 className='home-projects-heading'>Featured Projects</h2>
        <div className="home-projects-grid">
          <div className="home-project-card">
            <img src={nike} alt="Project 1" className="home-project-image" />
            <h3 className="home-project-title">Project 1</h3>
            <p className="home-project-description">
              A brief description of what Project 1 is about. Highlight the key technologies used and the purpose of the project.
            </p>
          </div>
          <div className="home-project-card">
            <img src={fitclub} alt="Project 2" className="home-project-image" />
            <h3 className="home-project-title">Project 2</h3>
            <p className="home-project-description">
              A brief description of what Project 2 is about. Highlight the key technologies used and the purpose of the project.
            </p>
          </div>
          <div className="home-project-card">
            <img src={nike} alt="Project 1" className="home-project-image" />
            <h3 className="home-project-title">Project 1</h3>
            <p className="home-project-description">
              A brief description of what Project 1 is about. Highlight the key technologies used and the purpose of the project.
            </p>
          </div>
          <div className="home-project-card">
            <img src={fitclub} alt="Project 2" className="home-project-image" />
            <h3 className="home-project-title">Project 2</h3>
            <p className="home-project-description">
              A brief description of what Project 2 is about. Highlight the key technologies used and the purpose of the project.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Responsive Web Design</li>
          <li>UI/UX Design</li>
          <li>Git & GitHub</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Let's Work Together</h2>
        <p>
          Interested in working together or have any questions? Feel free to reach out to me!
        </p>
        <a href="/contacts" className="cta-button">Contact Me</a>
      </section>
    </div>
  );
};

export default Home;
