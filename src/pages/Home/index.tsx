import { Header, Layout } from 'components';
import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Layout>
        <StyledHome>
          <li
            onClick={() => {
              navigate('/report');
            }}
          >
            레포트
          </li>
          <li
            onClick={() => {
              navigate('/passenger');
            }}
          >
            승객목록
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
