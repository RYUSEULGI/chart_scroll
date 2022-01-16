import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }: any) => {
  return (
    <>
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;

const StyledLayout = styled.div`
  margin: 0 auto;
  width: 47.5rem;
  height: 100vh;
  background-color: ${(props) => props.theme.white};
  padding: 1.25rem;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1.25rem 0;
  }
`;
