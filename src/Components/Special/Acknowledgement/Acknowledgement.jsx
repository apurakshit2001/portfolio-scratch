// Acknowledgement.jsx
import React from 'react';
import './Acknowledgement.css';

const Acknowledgement = () => {
  return (
    <div className="acknowledgement-container">
      <section className="acknowledgement-section">
        <h2 className="acknowledgement-heading">Acknowledgements</h2>
        <p className="acknowledgement-description">
          I would like to express my deepest gratitude to the people who have contributed to my journey as a front-end developer and UI/UX designer. Their support, inspiration, and guidance have been invaluable in shaping my career.
        </p>

        <div className="acknowledgement-list">
          <div className="acknowledgement-item">
            <h3>Mentors</h3>
            <p>
              A big thank you to my mentors, who have guided me and provided invaluable advice throughout my learning process.
            </p>
          </div>

          <div className="acknowledgement-item">
            <h3>Family & Friends</h3>
            <p>
              To my family and friends, thank you for your endless support and encouragement. Your belief in me has been a driving force in my pursuit of excellence.
            </p>
          </div>

          <div className="acknowledgement-item">
            <h3>Community</h3>
            <p>
              A special mention to the developer community, for the resources, tutorials, and forums that have helped me solve problems and learn new skills.
            </p>
          </div>

          <div className="acknowledgement-item">
            <h3>Clients & Collaborators</h3>
            <p>
              Thank you to all the clients and collaborators I've worked with. Your trust in my abilities has allowed me to grow and refine my craft.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acknowledgement;
