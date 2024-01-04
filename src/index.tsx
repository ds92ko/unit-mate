import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from './pages/Basic';
import Viewport from './pages/Viewport';
import Percent from './pages/Percent';
import RemandEm from './pages/RemandEm';
import Header from './layout/Header';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <React.StrictMode>
          <div className='wrap'>
            <Header/>
            <Routes>
              <Route path="/" element={<Basic />} />
              <Route path="/viewport" element={<Viewport />} />
              <Route path="/percent" element={<Percent />} />
              <Route path="/rem-em" element={<RemandEm />} />
            </Routes>
          </div>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
