// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { faBookOpenReader, faHeadphones, faUsers, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/dashboard.css';

const Dashboard = () => {
  
  return (
    <div className="page-container">
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <h3 id="Users">&nbsp; Users</h3>
      <div className="container">
        {/* First Column */}
        <div className="column-wrapper">
          <div className="card">
            <div>
              <h3 style={{ color: '#228B22', textAlign: 'center' }}><span className="icon"><FontAwesomeIcon icon={faUsers} /></span> Registrations</h3>
              <span style={{ color: '#228B22', display: 'block', margin: '0 auto' }} id="nTotal">40</span>
              <table style={{ width: '100%' }}>
                {/* ... */}
              </table>
            </div>
            <Link to="/registrations" className="link">
              Total: 100<br />
              <span style={{ fontSize: '0.8em', color: '#ffffff80', textDecoration: 'underline' }}>View Details</span>
            </Link>
          </div>
        </div>

        {/* Second Column */}
         <div className="column-wrapper">
          <div className="card">
            <div>
              <h3 style={{ color: '#e74c3c', textAlign: 'center' }}><span className="icon"><FontAwesomeIcon icon={faExclamationTriangle} /></span> Mismatch</h3>
              <span style={{ color: '#e74c3c', display: 'block', margin: '0 auto' }} id="nTotal">20</span>
              <table style={{ width: '100%' }}>
                {/* ... */}
              </table>
            </div>
            <Link to="/registrations" className="link">
              Total: 100<br />
              <span style={{ fontSize: '0.8em', color: '#ffffff80', textDecoration: 'underline' }}>View Details</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <br/>
      <div>
        <h3>&nbsp;Subjects</h3>        
            <div className="card subjects-card">
            <div className="scrollable-section">
              {/* Rows for Total Students and Total Played Files */}
              <div className="scrollable-content">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="row-card">
                    {/* Inner Card Body for Each Row */}
                    <div className="inner-card-body">
                      <div className="column">
                        <span className="icon"><FontAwesomeIcon icon={faBookOpenReader} /></span> {/* Total Students Icon */}
                        <strong>Total Students: 40</strong> 
                      </div>
                      <div className="column">
                        <span className="icon"><FontAwesomeIcon icon={faHeadphones} /></span> {/* Total Played Files Icon */}
                        <strong>Total Played Files: 40</strong> 
                      </div>
                    </div>
                    {/* Link Card for Each Row */}
                    <Link to="/subject" className="link-card">
                      Subject Name<br />
                      <span style={{ fontSize: '0.8em', color: '#ffffff80', textDecoration: 'underline' }}>Click Here</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
