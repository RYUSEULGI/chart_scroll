import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Logo>Logo</Logo>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 0 1.25rem;
  width: 47.5rem;
  height: 4.375rem;
  background-color: hsl(0, 0%, 0%);
  z-index: 999;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  color: hsl(0, 0%, 100%);
  font-weight: 700;
`;
