import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./index.css"
// Import createRoot from react-dom/client
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';

// Set the App element
Modal.setAppElement('#root');


// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
