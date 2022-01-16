import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IChartStateType } from 'types/chartTypes';

const Line = ({ data }: IChartStateType) => {
  const width = 556;
  const heigth = 160;

  const size = 100;

  const drawLine = (x1: number, x2: number, y1: number, y2: number) => {
    return (
      <line
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
        stroke="hsl(0, 0%, 0%)"
        strokeWidth="2"
      />
    );
  };

  // // 제일 큰 값 100
  // const getMaxY = () => {
  //   const cycle = data.map((obj) => obj.cycle);
  //   return Math.max.apply(null, cycle);
  // };

  // // 가장 작은 값 7
  // const getMinY = () => {
  //   const cycle = data.map((obj) => obj.cycle);
  //   return Math.min.apply(null, cycle);
  // };

  // const minY = getMinY();

  // const drawX = (x: number) => {
  //   return (x / maxX) * width;
  // };

  // const drawY = (y: number) => {
  //   const cycle = data.map((obj) => obj.cycle);
  //   return heigth - (y / getMaxY()) * heigth;
  // };

  return (
    <>
      <StyledLine>
        <svg width="556" height="160">
          <line
            x1="92.66666666666667"
            y1="132"
            x2="185.33333333333334"
            y2="118"
            stroke="#222"
            strokeWidth="2"
          ></line>
          <line
            x1="96.69565217391305"
            y1="55"
            x2="556"
            y2="144.8"
            stroke="#222"
            strokeWidth="2"
          ></line>
          {data.map((list) => {
            return (
              <div key={list.cycle}>
                <circle r={4.5} fill="hsl(0, 0%, 0%)"></circle>
              </div>
            );
          })}
        </svg>
        <DatePosition>
          {data.map((list) => {
            return <span key={list.cycle}>{list.cycle}일</span>;
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
