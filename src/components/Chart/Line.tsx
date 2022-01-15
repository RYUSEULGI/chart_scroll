import React from 'react';
import { IChartListProps, IChartType } from 'types';
import styled from 'styled-components';

const Line = ({ data }: IChartType) => {
  return (
    <>
      <StyledLine>
        <svg width="556" height="160">
          {data.map((list) => {
            return (
              <>
                <line
                  x1={}
                  y1={}
                  x2={}
                  y2={}
                  stroke="hsl(0, 0%, 0%)"
                  strokeWidth="2"
                ></line>
                <circle r={4.5} fill="hsl(0, 0%, 0%)"></circle>
              </>
            );
          })}
        </svg>
        <DatePosition>
          {data.map((list) => {
            return (
              <>
                <span>{list.cycle}일</span>
              </>
            );
          })}
        </DatePosition>
      </StyledLine>
    </>
  );
};

export default Line;

const StyledLine = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  position: relative;
`;

const DatePosition = styled.div`
  position: absolute;

  .span:nth-child(1) {
    top: 102px;
    left: 80px;
  }

  .span:nth-child(2) {
    top: 102px;
    left: 80px;
  }

  .span:nth-child(3) {
    top: 102px;
    left: 80px;
  }

  .span:nth-child(4) {
    top: 102px;
    left: 80px;
  }

  .span:nth-child(5) {
    top: 102px;
    left: 80px;
  }
`;
