import React from 'react';
import ReactDOM from 'react-dom/client';
import './css_files/index.css';
import App from './App';
import ThemeProvider from './components/theme/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);


