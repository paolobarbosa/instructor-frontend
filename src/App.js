import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globalfont.css';
import BottomNavbar from './BottomNavbar';
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import Approvals from './pages/Approvals';
import Audio from './pages/Audio';
import More from './pages/More';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/approvals" element={<Approvals />} />

          <Route path="/audio" element={<Audio />} />
          <Route path="/more" element={<More />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
};

export default App;
