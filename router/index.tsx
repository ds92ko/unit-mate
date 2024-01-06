import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from '../src/pages/Basic';
import Percent from '../src/pages/Percent';
import Viewport from '../src/pages/Viewport';
import RemAndEm from '../src/pages/RemandEm';

const Router = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route
            path="/"
            element={<Basic />}
          />
          <Route
            path="/percent"
            element={<Percent />}
          />
          <Route
            path="/viewport"
            element={<Viewport />}
          />
          <Route
            path="/rem-em"
            element={<RemAndEm />}
          />
        </Routes>
        <div className="App"></div>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Router;
