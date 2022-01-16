import { Boardpage, Chartpage, Home } from 'pages';
import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default App;
