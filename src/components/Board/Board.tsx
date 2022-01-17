import React from 'react';
import styled from 'styled-components';
import { IBoardProps } from 'types/boardTypes';

const Board = (props: IBoardProps) => {
  const { _id, name, trips, airline, __v } = props;

  return (
    <>
      <StyledBoard>
        <Name>
          <span>{name}</span>
          <span>{trips} trips</span>
        </Name>
        <Box>
          <BoxImg src={`${airline[0].logo}`} alt={`${airline[0].name}`} />
          <div>{airline[0].slogan}</div>
        </Box>
        <BoxBottom>{_id}</BoxBottom>
      </StyledBoard>
    </>
  );
};

export default Board;

const StyledBoard = styled.li`
  width: 100%;
  padding: 1.25rem 0;
  border-top: ${({ theme }) => `solid 1px ${theme.darkGray}`};
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;

  span:nth-child(2) {
    font-size: 14px;
  }
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.gray};
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 1.25rem;
`;

const BoxImg = styled.img`
  width: 5rem;
  margin-right: 1rem;
`;

const BoxBottom = styled.div`
  color: ${({ theme }) => theme.darkGray};
  font-weight: 700;
  text-align: right;
  margin: 1.25rem 0;
`;
