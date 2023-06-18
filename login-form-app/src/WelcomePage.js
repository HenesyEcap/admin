import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path based on the location of your logo file
import './WelcomePage.css';

import ManageAccounts from './ManageAccounts';

function WelcomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarClosed, setSidebarClosed] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/'); // Redirect to the welcome page after logout
  };

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  return (
    <div className={`welcome-page ${sidebarClosed ? 'sidebar-closed' : ''}`}>
      <button className="toggle-sidebar-button" onClick={toggleSidebar}>
        {sidebarClosed ? '<' : '>'}
      </button>
      <nav className="welcome-page-header">
        <div className="welcome-page-logo">
          <img src={logo} alt="Company Logo" />
          <span className="welcome-page-logo-text">VEE EXPRESS</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="welcome-page-content">
        <aside className={`welcome-page-sidebar ${sidebarClosed ? 'sidebar-closed' : ''}`}>
          <ul className="sidebar-nav">
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/manage-accounts"
                className={location.pathname === '/manage-accounts' ? 'active' : ''}
              >
                Manage Accounts
              </Link>
            </li>
          </ul>
        </aside>
        <div className="welcome-page-main">
          <h1>Welcome to the Dashboard</h1>
          <p>LIST OF TRAINS</p>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/manage-accounts" element={<ManageAccounts />} />
      </Routes>
    </div>
  );
}

export default WelcomePage;
