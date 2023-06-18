import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import ManageAccounts from './ManageAccounts';
import LoginForm from './LoginForm';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginForm setIsLoggedIn={() => {}} />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/manageaccounts" element={<ManageAccounts />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
