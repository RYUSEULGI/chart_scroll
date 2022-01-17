import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledHeader>
        <Logo
          onClick={() => {
            navigate('/');
          }}
        >
          Motionlabs
        </Logo>
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
  background-color: ${({ theme }) => theme.black};
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
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  cursor: pointer;
`;
