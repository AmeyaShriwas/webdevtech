import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayoutBranding from './../Pages/DashboardLayout/DashboardLayoutBranding';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayoutBranding />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
