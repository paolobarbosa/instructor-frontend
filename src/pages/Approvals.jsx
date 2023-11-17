// Approvals.js

import React, { useState } from 'react';
import '../styles/Approvals.css';

const Approvals = () => {
  const [category, setCategory] = useState('Registration');
  const [studentData, setStudentData] = useState([
    { name: 'Stan Lee', status: 'Deleted' },
    { name: 'Mandy Cheng', status: 'Pending' },
    { name: 'John Tan', status: 'Duplicate' },
    { name: 'Nikki Chan', status: 'Approved' },
    { name: 'Gerald Goh', status: 'Mismatch' },
    // ... add more student data here
  ]);

  const handleCategoryClick = (clickedCategory) => {
    setCategory(clickedCategory);
    // Add logic to navigate to the clicked category page
  };

  const getStatusButtonColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'Duplicate':
        return 'status-duplicate';
      case 'Approved':
        return 'status-approved';
      case 'Deleted':
        return 'status-deleted';
      case 'Mismatch':
        return 'status-mismatch';
      default:
        return '';
    }
  };

  return (
    <div className="approval-page-container">
      <h2>Approvals</h2>

      <div className="Approval-container">
        {/* Combined Card Body */}
        <div className="Approval-card-body">
          <div className="Approval-column">
            {/* Approval Categories and Total Rows */}
            <div className="Approval-columns">
              <div
                className={`Approval-column ${category === 'Registration' ? 'selected-green' : ''}`}
                onClick={() => handleCategoryClick('Registration')}
              >
                Registration
              </div>
              {/* Add space between columns */}
              <div className="Column-space"></div>
              <div
                className={`Approval-column ${category === 'Mismatch' ? 'selected-red' : ''}`}
                onClick={() => handleCategoryClick('Mismatch')}
              >
                Mismatch
              </div>
            </div>
            {/* Total Pending and Total Duplicate row */}
            <div className={`Approval-row Total-row`}>
              <div className="Approval-column">Total Pending: 30</div>
              <div className="Approval-column">Total Duplicate: 30</div>
            </div>

            {/* Student Data */}
            <br />
            {/* Map through student data and create rows */}
            {studentData.map((student, index) => (
              <div key={index} className="Approval-row">
                <div className="Approval-column">{student.name}</div>
                <div
                  className={`Approval-status-button ${getStatusButtonColor(student.status)}`}
                >
                  {student.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approvals;
