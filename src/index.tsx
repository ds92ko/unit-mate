import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Basic from './pages/Basic';
import Viewport from './pages/Viewport';
import Percent from './pages/Percent';
import RemandEm from './pages/RemandEm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
          <Layout/>
          <Routes>
            <Route path="/" element={<Basic />} />
            <Route path="/viewport" element={<Viewport />} />
            <Route path="/percent" element={<Percent />} />
            <Route path="/rem-em" element={<RemandEm />} />
          </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
