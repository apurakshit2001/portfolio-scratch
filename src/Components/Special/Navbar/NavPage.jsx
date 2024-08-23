// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const NavPage = () => {
  const handleToggle = () => {
    document.querySelector('.navbar-container').classList.toggle('expanded');
  };

  return (
    <div>
      <nav className="navbar-container">
      <a className='map' href="https://info.flagcounter.com/rzpc"><img src="https://s11.flagcounter.com/count2/rzpc/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_1/" alt="Flag Counter" border="0"/></a>

        <ul className="nav-content">
          <Link to="/" className="nav-links">
            <li className="link-text">Home</li>
          </Link>
          <Link to="/about" className="nav-links">
            <li className="link-text">About</li>
          </Link>
          <Link to="/other-works" className="nav-links">
            <li className="link-text">Other Works</li>
          </Link>
          <Link to="/contacts" className="nav-links">
            <li className="link-text">Contacts</li>
          </Link>
          <Link to="/acknowledgement" className="nav-links">
            <li className="link-text">Acknowledgement</li>
          </Link>
        </ul>
      </nav>

      <button id="toggleButton" className="toggle-button" onClick={handleToggle}>
        ☰
      </button>
    </div>
  );
};

export default NavPage;
