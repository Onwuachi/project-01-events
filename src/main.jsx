import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// This is the entry point of the React application.
// It renders the App component into the root element of the HTML document.
// The App component is wrapped in React.StrictMode for highlighting potential problems in the application.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
