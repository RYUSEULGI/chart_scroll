import { Header, Layout } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <StyledHome>
          <li>
            <Link to="/report">레포트</Link>
          </li>
          <li>
            <Link to="/passenger">승객목록</Link>
          </li>
        </StyledHome>
      </Layout>
    </>
  );
};

export default Home;

const StyledHome = styled.ul`
  font-size: 1.25rem;
  cursor: pointer;
  padding: 1.5rem;

  li {
    padding: 1rem;
    list-style: square;
  }
`;
