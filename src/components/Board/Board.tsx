import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IBoardList } from 'types/boardTypes';

const Board = (props: IBoardList) => {
  const { _id, name, trips, airline, __v } = props;

  return (
    <>
      <StyledBoard>
        <Name>
          <span>{name}</span>
          <span>{trips} trips</span>
        </Name>
        <Box>
          <img src={`${airline[0].logo}`} alt={`${airline[0].name}`} />
          <div>{airline[0].slogan}</div>
        </Box>
        <div className="planeId">{_id}</div>
      </StyledBoard>
    </>
  );
};

export default Board;

const StyledBoard = styled.li`
  width: 100%;
  padding: 1.25rem 0;
  border-top: solid 1px hsl(0, 0%, 91%);

  .planeId {
    color: hsl(0, 0%, 84%);
    font-weight: 700;
    text-align: right;
    margin: 1.25rem 0;
  }
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
  background-color: hsl(0, 0%, 94%);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  padding: 1.25rem;

  img {
    width: 5rem;
    margin-right: 1rem;
  }
`;
