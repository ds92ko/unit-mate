import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './layout/Header';
import './style/variable.css';
import './style/layout.css';
import MainCalculater from './layout/MainCalculater';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="wrap">
      <Header />
      <MainCalculater />
    </div>
  </React.StrictMode>,
);

reportWebVitals();
