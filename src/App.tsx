import React from 'react';
import { Route, Routes } from 'react-router';
import { ChartApp } from './container';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{
          minHeight: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route path="/report" element={<ChartApp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
