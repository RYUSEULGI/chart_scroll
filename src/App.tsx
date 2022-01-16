import { Boardpage, Chartpage, Home } from 'pages';
import React from 'react';
import { Route, Routes } from 'react-router';
import GlobalStyle from 'styles/GlobalStyle';

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
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Chartpage />} />
          <Route path="/passenger" element={<Boardpage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
