import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpenReader, faUserCheck, faHeadphones, faBars } from '@fortawesome/free-solid-svg-icons';
import './styles/BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <Link to="/" className="nav-item">
        <FontAwesomeIcon icon={faHome} />
        Dashboard
      </Link>
      <Link to="/student" className="nav-item">
        <FontAwesomeIcon icon={faBookOpenReader} />
        Student
      </Link>
      <Link to="/approvals" className="nav-item">
        <FontAwesomeIcon icon={faUserCheck} />
        Approvals
      </Link>
      <Link to="/audio" className="nav-item">
        <FontAwesomeIcon icon={faHeadphones} />
        Audio
      </Link>
      <Link to="/more" className="nav-item">
        <FontAwesomeIcon icon={faBars} />
        More
      </Link>
    </div>
  );
};

export default BottomNavbar;
